"use client";

import {
  Bot,
  Compass,
  LayoutDashboard,
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
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons/logo";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { TelegramIcon } from "../icons/telegram";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

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
        </SidebarMenu>

        <SidebarGroup className="mt-auto">
            <Separator className="my-2" />
            <SidebarGroupLabel asChild>
                <div className="px-2 font-body">Connect</div>
            </SidebarGroupLabel>
            <div className="p-2 space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                    <TelegramIcon className="w-4 h-4"/>
                    <span className="group-data-[collapsible=icon]:hidden">Telegram Bot</span>
                </Button>
                 <Button variant="outline" className="w-full justify-start gap-2">
                    <Bot className="w-4 h-4"/>
                    <span className="group-data-[collapsible=icon]:hidden">Chat Assistant</span>
                </Button>
            </div>
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter>
        <Separator className="mb-2" />
        <div className="p-2 flex items-center gap-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://picsum.photos/seed/user/200/200" alt="User" data-ai-hint="user avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <p className="text-sm font-medium text-foreground">User</p>
                <p className="text-xs text-muted-foreground">user@email.com</p>
            </div>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" tooltip="Settings">
              <Settings />
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" tooltip="Log Out">
              <LogOut />
              Log Out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
