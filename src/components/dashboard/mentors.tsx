import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { type Mentor } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const mentors: Mentor[] = [
    { name: "Sofia Rodriguez", title: "Senior AI Engineer @ Google", specialties: ["Machine Learning", "NLP", "Python"], imageUrl: PlaceHolderImages.find(img => img.id === 'mentor1')?.imageUrl ?? "", imageHint: "professional woman" },
    { name: "Isabella Chen", title: "Product Manager @ Netflix", specialties: ["Product Strategy", "Agile", "UX"], imageUrl: PlaceHolderImages.find(img => img.id === 'mentor2')?.imageUrl ?? "", imageHint: "friendly mentor" },
    { name: "Olivia Patel", title: "Cybersecurity Analyst", specialties: ["Network Security", "Ethical Hacking"], imageUrl: PlaceHolderImages.find(img => img.id === 'mentor3')?.imageUrl ?? "", imageHint: "tech professional" },
    { name: "Amelia Kim", title: "Frontend Developer @ Vercel", specialties: ["React", "Next.js", "Web Performance"], imageUrl: PlaceHolderImages.find(img => img.id === 'mentor4')?.imageUrl ?? "", imageHint: "woman laptop" },
];

export function Mentors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Find Your Mentor</CardTitle>
        <CardDescription className="font-body">Connect with experienced professionals in your field of interest.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="border rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <Image
              src={mentor.imageUrl}
              alt={`Portrait of ${mentor.name}`}
              width={80}
              height={80}
              className="rounded-full mb-4"
              data-ai-hint={mentor.imageHint}
            />
            <h3 className="font-headline font-semibold">{mentor.name}</h3>
            <p className="text-sm text-muted-foreground font-body">{mentor.title}</p>
            <div className="flex flex-wrap gap-1 justify-center mt-2">
                {mentor.specialties.map(spec => <Badge variant="secondary" key={spec}>{spec}</Badge>)}
            </div>
            <Button variant="outline" size="sm" className="mt-4 w-full">Connect</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
