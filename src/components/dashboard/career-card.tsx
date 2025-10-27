
import { ArrowRight, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type CareerCardProps = {
  path: string;
};

export function CareerCard({ path }: CareerCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
                <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-xl">{path}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="font-body">
          Explore this path to see where it can take you. We'll provide course recommendations, market insights, and connect you with mentors.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button size="sm" variant="secondary" className="shadow-lg hover:shadow-xl">
          <BookOpen />
          Courses
        </Button>
        <Button size="sm" variant="secondary" className="shadow-lg hover:shadow-xl">
          <Users />
          Mentors
        </Button>
      </CardFooter>
    </Card>
  );
}
