'use server';

/**
 * @fileOverview Generates initial career paths based on user interests.
 *
 * - generateInitialCareerPaths - A function that generates career path recommendations.
 * - GenerateInitialCareerPathsInput - The input type for the generateInitialCareerPaths function.
 * - GenerateInitialCareerPathsOutput - The return type for the generateInitialCareerPaths function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialCareerPathsInputSchema = z.object({
  interests: z
    .string()
    .describe("A short text prompt describing the user's interests."),
});
export type GenerateInitialCareerPathsInput = z.infer<
  typeof GenerateInitialCareerPathsInputSchema
>;

const GenerateInitialCareerPathsOutputSchema = z.object({
  careerPaths: z
    .array(z.string())
    .describe('An array of career path recommendations.'),
});
export type GenerateInitialCareerPathsOutput = z.infer<
  typeof GenerateInitialCareerPathsOutputSchema
>;

export async function generateInitialCareerPaths(
  input: GenerateInitialCareerPathsInput
): Promise<GenerateInitialCareerPathsOutput> {
  return generateInitialCareerPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInitialCareerPathsPrompt',
  input: {schema: GenerateInitialCareerPathsInputSchema},
  output: {schema: GenerateInitialCareerPathsOutputSchema},
  prompt: `You are an AI career counselor. A user has provided a description of their interests.  Based on these interests, generate a list of potential career paths. Return a JSON array of strings. Here are the user's interests: {{{interests}}}`,
});

const generateInitialCareerPathsFlow = ai.defineFlow(
  {
    name: 'generateInitialCareerPathsFlow',
    inputSchema: GenerateInitialCareerPathsInputSchema,
    outputSchema: GenerateInitialCareerPathsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
