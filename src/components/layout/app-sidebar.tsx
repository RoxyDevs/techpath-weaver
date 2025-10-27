"use client";

import {
  Bot,
  Compass,
  LayoutDashboard,
  LogIn,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons/logo";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth, useUser } from "@/firebase";
import { VerifiedBadge } from "../icons/verified-badge";
import { SettingsDialog } from "./settings-dialog";
import { useState } from "react";

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSignOut = async () => {
    await auth.signOut();
  };

  const isCreator = user?.email === 'roxdev2023@gmail.com';

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo className="w-32 h-auto" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="/"
              isActive={isActive("/")}
              tooltip="Dashboard"
            >
              <LayoutDashboard />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="#"
              isActive={isActive("/explore")}
              tooltip="Explore Paths"
            >
              <Compass />
              Explore Paths
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="#"
              isActive={isActive("/mentors")}
              tooltip="Find Mentors"
            >
              <Users />
              Find Mentors
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="#"
              isActive={isActive("/assistant")}
              tooltip="Chat Assistant"
            >
              <Bot />
              Chat Assistant
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="mb-2" />
        {isUserLoading ? (
           <div className="p-2 flex items-center gap-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
             {/* Skeleton loader */}
           </div>
        ) : user ? (
          <>
            <div className="p-2 flex items-center gap-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                <AvatarFallback>{user.displayName?.charAt(0) ?? 'U'}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-medium text-foreground">{user.displayName}</p>
                  {isCreator && <VerifiedBadge className="h-4 w-4" />}
                </div>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <SettingsDialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setIsSettingsOpen(true)} tooltip="Settings">
                  <Settings />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleSignOut} tooltip="Log Out">
                  <LogOut />
                  Log Out
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </>
        ) : (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/login" tooltip="Log In">
                <LogIn />
                Log In
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
