"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { useUser } from "@/firebase";

export function Header() {
  const { user } = useUser();
  const userName = user?.displayName?.split(' ')[0] || 'Dreamer';

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-xl font-semibold font-headline text-foreground/90">Welcome, {userName}!</h1>
      </div>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
