'use client';

import { getDailyTechEvent } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TechTrivia() {
  const [event, setEvent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const result = await getDailyTechEvent();
        setEvent(result);
      } catch (error) {
        console.error(error);
        setEvent("Could not load today's tech trivia.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  return (
    <Card className="bg-accent/20 border-accent/30 flex flex-col justify-center">
      <CardHeader className="pb-4">
        <CardTitle className="font-headline text-xl flex items-center gap-2">
          <Calendar className="h-5 w-5 text-accent" />
          <span>On this day in Tech...</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="font-body text-foreground/90">{event}</p>
        )}
      </CardContent>
    </Card>
  );
}
