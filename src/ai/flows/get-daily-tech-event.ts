'use server';
/**
 * @fileOverview Generates a "this day in tech history" event.
 *
 * - getDailyTechEvent - A function that returns a significant tech event for the current day.
 * - DailyTechEventOutput - The return type for the getDailyTechEvent function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DailyTechEventOutputSchema = z.object({
  event: z.string().describe('A short description of a significant event in technology history that happened on this day. Include the year.'),
});
export type DailyTechEventOutput = z.infer<typeof DailyTechEventOutputSchema>;

export async function getDailyTechEvent(): Promise<DailyTechEventOutput> {
  return dailyTechEventFlow();
}

const prompt = ai.definePrompt({
  name: 'dailyTechEventPrompt',
  output: { schema: DailyTechEventOutputSchema },
  prompt: `Return a significant event in technology history that happened today, {{currentDate}}. Be concise and interesting. Include the year the event occurred.`,
});

const dailyTechEventFlow = ai.defineFlow(
  {
    name: 'dailyTechEventFlow',
    outputSchema: DailyTechEventOutputSchema,
  },
  async () => {
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const { output } = await prompt({ currentDate });
    return output!;
  }
);
