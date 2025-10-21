'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/analyze-market-demand-for-skills.ts';
import '@/ai/flows/suggest-relevant-courses.ts';
import '@/ai/flows/generate-initial-career-paths.ts';
import '@/ai/flows/get-daily-tech-event.ts';
