import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";

const skills = [
    { name: "React", progress: 75, category: "Frontend" },
    { name: "Python", progress: 90, category: "Backend" },
    { name: "SQL", progress: 60, category: "Database" },
    { name: "UI/UX Design", progress: 45, category: "Design" },
]

export function Progress() {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Your Skill Progress</CardTitle>
            <CardDescription className="font-body">Track your journey and see how far you've come.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            {skills.map(skill => (
                <div key={skill.name}>
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold font-body">{skill.name}</span>
                        <Badge variant="outline">{skill.category}</Badge>
                    </div>
                    <ProgressBar value={skill.progress} aria-label={`${skill.name} progress`} />
                </div>
            ))}
        </CardContent>
    </Card>
  )
}
