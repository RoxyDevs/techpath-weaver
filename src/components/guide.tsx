
'use client';

import { HelpCircle } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useGuides } from '@/contexts/GuidesContext';

type GuideProps = {
  content: string;
};

export function Guide({ content }: GuideProps) {
  const { showGuides } = useGuides();

  if (!showGuides) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="absolute -top-2 -right-2 text-muted-foreground hover:text-accent transition-colors">
          <HelpCircle className="h-4 w-4" />
          <span className="sr-only">Ayuda</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-60 text-sm">{content}</PopoverContent>
    </Popover>
  );
}
