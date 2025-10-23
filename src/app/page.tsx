'use client';

import { AppSidebar } from '@/components/layout/app-sidebar';
import { Header } from '@/components/layout/header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Dashboard } from '@/components/dashboard/dashboard';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if loading is complete and there's definitely no user.
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  // While loading, show a loader.
  // This prevents the dashboard from flashing before a potential redirect.
  if (isUserLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // If loading is done and we have a user, render the main content.
  // If there's no user, the useEffect will have already initiated the redirect.
  // We can return null or a loader while the redirect is in progress.
  if (!user) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 p-4 sm:p-6 md:p-10 bg-background/50">
          <Dashboard />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
