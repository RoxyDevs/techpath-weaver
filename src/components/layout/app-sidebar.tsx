
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppWindow,
  FileText,
  HelpCircle,
  Package,
  Settings,
  ShieldCheck,
  Users,
  Info, // Import the Info icon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import { useUser } from "@/firebase";

const links = [
  {
    icon: AppWindow,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Users,
    label: "Mentors",
    href: "/mentors",
  },
  {
    icon: FileText,
    label: "Courses",
    href: "/courses",
  },
  {
    icon: HelpCircle,
    label: "Q&A",
    href: "/q-a",
  },
  {
    icon: Info, // Add the Info icon
    label: "About",
    href: "/about",
  },
];

const bottomLinks = [
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: ShieldCheck,
    label: "Privacy",
    href: "/privacy",
  },
  {
    icon: Package,
    label: "Releases",
    href: "/releases",
  },
];

export function AppSidebar() {
  const { isMinimized } = useSidebar();
  const pathname = usePathname();
  const { user, isUserLoading } = useUser();

  if (isUserLoading || !user) {
    return null;
  }

  return (
    <div
      data-minimized={isMinimized}
      className="h-full bg-sidebar/90 backdrop-blur-lg border-r border-sidebar-border transition-all duration-300 ease-in-out group/sidebar flex flex-col justify-between"
    >
      <div>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="py-1 px-3">
              <TooltipProvider delayDuration={70}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({
                          variant: isActive ? "sidebarActive" : "sidebar",
                          size: "icon",
                        }),
                        "h-11 w-11 transition-all duration-300 ease-in-out"
                      )}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4 capitalize"
                  >
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          );
        })}
      </div>
      <div>
        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="py-1 px-3">
              <TooltipProvider delayDuration={70}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({
                          variant: isActive ? "sidebarActive" : "sidebar",
                          size: "icon",
                        }),
                        "h-11 w-11 transition-all duration-300 ease-in-out"
                      )}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4 capitalize"
                  >
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          );
        })}
      </div>
    </div>
  );
}
