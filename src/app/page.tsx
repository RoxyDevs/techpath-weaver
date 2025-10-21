import { AppSidebar } from '@/components/layout/app-sidebar';
import { Header } from '@/components/layout/header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Dashboard } from '@/components/dashboard/dashboard';

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 p-4 sm:p-6 md:p-10 bg-background">
          <Dashboard />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
