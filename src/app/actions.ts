"use server";

import { generateInitialCareerPaths } from "@/ai/flows/generate-initial-career-paths";
import { getDailyTechEvent as getDailyTechEventFlow } from "@/ai/flows/get-daily-tech-event";
import { z } from "zod";

const interestsSchema = z.object({
  interests: z.string().min(10, "Please tell us a bit more about your interests."),
});

export type FormState = {
  message: string;
  paths: string[];
}

export async function getCareerPaths(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = interestsSchema.safeParse({
    interests: formData.get("interests"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.interests?.[0] ?? "Invalid input.",
      paths: [],
    };
  }

  try {
    const result = await generateInitialCareerPaths({
      interests: validatedFields.data.interests,
    });
    
    if (!result.careerPaths || result.careerPaths.length === 0) {
        return {
            message: "Could not generate career paths at this time. Please try a different query.",
            paths: [],
        }
    }

    return {
      message: "Successfully generated career paths.",
      paths: result.careerPaths,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred while generating career paths. Please try again later.",
      paths: [],
    };
  }
}

export async function getDailyTechEvent(): Promise<string> {
    try {
        const result = await getDailyTechEventFlow();
        return result.event;
    } catch (error) {
        console.error("Error fetching daily tech event:", error);
        return "Could not fetch today's tech trivia. Please check back tomorrow!";
    }
}
