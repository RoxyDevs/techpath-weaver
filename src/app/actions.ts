"use server";

import { generateInitialCareerPaths } from "@/ai/flows/generate-initial-career-paths";
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
