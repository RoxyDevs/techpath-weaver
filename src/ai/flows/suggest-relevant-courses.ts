'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting relevant courses to users based on their career path interests.
 *
 * - suggestRelevantCourses - A function that suggests relevant courses based on user profile and career goals.
 * - SuggestRelevantCoursesInput - The input type for the suggestRelevantCourses function.
 * - SuggestRelevantCoursesOutput - The output type for the suggestRelevantCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelevantCoursesInputSchema = z.object({
  careerPath: z.string().describe('The career path the user is interested in.'),
  userSkills: z.array(z.string()).describe('The current skills of the user.'),
  jobPostingsData: z.string().describe('Data from job postings related to the career path.'),
  successfulTransitions: z
    .string()
    .describe(
      'Examples of successful career transitions into the specified career path.'
    ),
});
export type SuggestRelevantCoursesInput = z.infer<
  typeof SuggestRelevantCoursesInputSchema
>;

const SuggestRelevantCoursesOutputSchema = z.object({
  suggestedCourses: z
    .array(z.string())
    .describe(
      'A list of courses that are relevant to the specified career path and user skills, and are likely to significantly contribute to career development.'
    ),
  reasoning: z.string().describe('The reasoning behind the course suggestions.'),
});
export type SuggestRelevantCoursesOutput = z.infer<
  typeof SuggestRelevantCoursesOutputSchema
>;

export async function suggestRelevantCourses(
  input: SuggestRelevantCoursesInput
): Promise<SuggestRelevantCoursesOutput> {
  return suggestRelevantCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelevantCoursesPrompt',
  input: {schema: SuggestRelevantCoursesInputSchema},
  output: {schema: SuggestRelevantCoursesOutputSchema},
  prompt: `You are an expert career advisor specializing in the tech industry. A user is interested in a particular career path, and needs advice on what courses they should take to advance their career in this path.

  Career path of interest: {{{careerPath}}}
  Current skills of the user: {{#if userSkills}}{{#each userSkills}}- {{{this}}}\n{{/each}}{{else}}None{{/if}}
  Job postings data: {{{jobPostingsData}}}
  Examples of successful career transitions: {{{successfulTransitions}}}

  Based on this information, suggest a list of courses that would be most relevant to the user, and that are likely to significantly contribute to their career development. Also provide a brief explanation of why each course is recommended.

  {{#if userSkills}}
  Consider what skills the user is missing, and how the course will fill those gaps.
  {{/if}}

  Format your response as a JSON object with "suggestedCourses" and "reasoning" fields. The "suggestedCourses" field should contain a list of course names, and the "reasoning" field should contain a string explaining why each course is recommended, referencing job postings data and successful career transition examples.
  `,
});

const suggestRelevantCoursesFlow = ai.defineFlow(
  {
    name: 'suggestRelevantCoursesFlow',
    inputSchema: SuggestRelevantCoursesInputSchema,
    outputSchema: SuggestRelevantCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
