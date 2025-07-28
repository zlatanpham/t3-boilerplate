"use client";

import * as React from "react";
import { useSession } from "next-auth/react";
import { Send, SquareTerminal, GithubIcon, ComponentIcon } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
    },
  ],
  navSecondary: [
    {
      title: "Github",
      url: "https://github.com/your-username/next-starter",
      icon: GithubIcon,
    },
    {
      title: "Feedback",
      url: "https://github.com/your-username/next-starter/issues",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, status } = useSession();

  const user = React.useMemo(() => {
    if (!session?.user) {
      return { name: "", email: "", avatar: "/avatars/default.jpg" };
    }
    const userData = session.user as unknown as {
      name?: string;
      email?: string;
      avatar?: string;
    };
    const name = userData.name ?? "";
    const email = userData.email ?? "";
    const avatar =
      typeof userData.avatar === "string"
        ? userData.avatar
        : "/avatars/default.jpg";
    return { name, email, avatar };
  }, [session]);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <ComponentIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Next Starter</span>
                  <span className="truncate text-xs">Boilerplate</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {status == "loading" ? (
          <div className="flex items-center gap-2 px-1 py-2">
            <Skeleton className="h-8 w-8 rounded-lg bg-gray-200" />
            <div className="grid flex-1 gap-1 text-left text-sm leading-tight">
              <Skeleton className="h-4 w-24 bg-gray-200" />
              <Skeleton className="h-3 w-32 bg-gray-200" />
            </div>
            <Skeleton className="ml-auto h-4 w-4" />
          </div>
        ) : (
          <NavUser user={user} />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
