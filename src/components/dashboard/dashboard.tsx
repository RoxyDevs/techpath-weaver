"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { getCareerPaths, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";
import { CareerCard } from "./career-card";
import { Recommendations } from "./recommendations";
import { Mentors } from "./mentors";
import { Progress } from "./progress";
import { TechTrivia } from "./tech-trivia";

const initialState: FormState = {
  message: "",
  paths: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Weaving...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Weave My Path
        </>
      )}
    </Button>
  );
}

export function Dashboard() {
  const [state, formAction] = useActionState(getCareerPaths, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.paths.length === 0) {
      toast({
        variant: "destructive",
        title: "Oh no!",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-primary/20 h-full">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Let's Weave Your Future</CardTitle>
                <CardDescription className="font-body text-base">
                  Tell us about your passions, skills, and what you love to do. Our AI will craft personalized career paths just for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <Textarea
                    name="interests"
                    placeholder="e.g., 'I love creating beautiful user interfaces, solving complex problems with code, and I'm passionate about data visualization and machine learning.'"
                    rows={4}
                    className="font-body text-base"
                  />
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
          <TechTrivia />
      </div>
      
      {state.paths.length > 0 ? (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-headline mb-4">Your Recommended Career Paths</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {state.paths.map((path, index) => (
                    <CareerCard key={index} path={path} />
                    ))}
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <Recommendations />
                <Progress />
            </div>

            <Mentors />

        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground font-body">
            <Wand2 className="mx-auto h-12 w-12 mb-4" />
            <p className="text-lg">Your future career paths will appear here once you share your interests.</p>
        </div>
      )}
    </div>
  );
}
