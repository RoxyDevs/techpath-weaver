
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpenCheck } from "lucide-react";

export function Progress() {
  const completedCourses = 3;
  const totalCourses = 10;
  const progressPercentage = (completedCourses / totalCourses) * 100;

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-4">
          <BookOpenCheck className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="font-headline text-2xl">Your Learning Progress</CardTitle>
            <CardDescription>You&apos;re on your way to mastery!</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center font-body">
            <span>Completed Courses</span>
            <span>{completedCourses} / {totalCourses}</span>
          </div>
          <Progress value={progressPercentage} />
          <p className="text-sm text-muted-foreground text-center pt-2">
            Keep up the great work! Every step forward is a victory.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
