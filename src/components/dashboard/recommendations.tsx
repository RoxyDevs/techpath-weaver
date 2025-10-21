import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const courses = [
    { title: "Advanced React and Redux", platform: "Coursera", description: "Master state management in large-scale applications." },
    { title: "Machine Learning A-Z", platform: "Udemy", description: "Learn to create Machine Learning algorithms in Python and R." },
    { title: "UI & Web Design using Figma", platform: "Skillshare", description: "Build a strong foundation in UI/UX design principles." },
    { title: "Google Cybersecurity Professional Certificate", platform: "Google", description: "Gain in-demand skills needed for an entry-level job in cybersecurity." },
]

export function Recommendations() {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Recommended Courses</CardTitle>
            <CardDescription className="font-body">Courses tailored to help you bridge skill gaps for your chosen path.</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="space-y-4">
                {courses.map((course, index) => (
                    <li key={course.title}>
                        <div className="flex justify-between items-start">
                           <div>
                            <h4 className="font-semibold font-body">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">{course.platform}</p>
                            <p className="text-sm mt-1">{course.description}</p>
                           </div>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                        {index < courses.length - 1 && <Separator className="mt-4" />}
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
  )
}
