'use client';

import {
    BookOpen,
    Bot,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
} from '@/components/ui/sidebar';
import React from 'react';
import { usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { useLang } from '@/hooks/useLang';

interface SharedProps extends Record<string, unknown> {
    appName: string;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { props: _props } = usePage<SharedProps>();
    const route = useRoute();
    const { __ } = useLang();

    const data = {
        navMain: [
            {
                title: __('sidebar.mainNav.items.dashboard'),
                url: route('dashboard.index'),
                icon: SquareTerminal,
                isActive: true,
            },
        ],
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">
                            {_props.appName}
                        </span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
