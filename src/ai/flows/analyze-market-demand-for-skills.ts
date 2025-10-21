'use server';
/**
 * @fileOverview Analyzes market demand for specific skills related to a career path.
 *
 * - analyzeMarketDemandForSkills - A function that analyzes market demand for specific skills.
 * - AnalyzeMarketDemandForSkillsInput - The input type for the analyzeMarketDemandForSkills function.
 * - AnalyzeMarketDemandForSkillsOutput - The return type for the analyzeMarketDemandForSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeMarketDemandForSkillsInputSchema = z.object({
  careerPath: z.string().describe('The career path to analyze market demand for.'),
  skills: z.array(z.string()).describe('The skills to analyze market demand for.'),
});
export type AnalyzeMarketDemandForSkillsInput = z.infer<typeof AnalyzeMarketDemandForSkillsInputSchema>;

const AnalyzeMarketDemandForSkillsOutputSchema = z.object({
  marketDemandSummary: z.string().describe('A summary of the market demand for the specified skills in the given career path.'),
});
export type AnalyzeMarketDemandForSkillsOutput = z.infer<typeof AnalyzeMarketDemandForSkillsOutputSchema>;

export async function analyzeMarketDemandForSkills(input: AnalyzeMarketDemandForSkillsInput): Promise<AnalyzeMarketDemandForSkillsOutput> {
  return analyzeMarketDemandForSkillsFlow(input);
}

const analyzeMarketDemandForSkillsPrompt = ai.definePrompt({
  name: 'analyzeMarketDemandForSkillsPrompt',
  input: {schema: AnalyzeMarketDemandForSkillsInputSchema},
  output: {schema: AnalyzeMarketDemandForSkillsOutputSchema},
  prompt: `Analyze the market demand for the following skills in the context of the career path: {{careerPath}}.\n\nSkills: {{#each skills}}{{{this}}}, {{/each}}\n\nProvide a summary of the market demand for these skills. Consider factors such as job postings, industry trends, and emerging technologies.`, // Correct Handlebars usage
});

const analyzeMarketDemandForSkillsFlow = ai.defineFlow(
  {
    name: 'analyzeMarketDemandForSkillsFlow',
    inputSchema: AnalyzeMarketDemandForSkillsInputSchema,
    outputSchema: AnalyzeMarketDemandForSkillsOutputSchema,
  },
  async input => {
    const {output} = await analyzeMarketDemandForSkillsPrompt(input);
    return output!;
  }
);
