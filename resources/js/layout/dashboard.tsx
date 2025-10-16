import React from "react";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Toaster} from "@/components/ui/sonner";

interface BreadcrumbItem {
    title: string;
    href?: string;
}

export default function DashboardLayout({ children, breadcrumb }: { children: React.ReactNode, breadcrumb: BreadcrumbItem[] } ) {
    return <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumb.map((item, index) => (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem className={index === 0 ? "hidden md:block" : ""}>
                                        {item.href ? (
                                            <BreadcrumbLink href={item.href}>
                                                {item.title}
                                            </BreadcrumbLink>
                                        ) : (
                                            <BreadcrumbPage>{item.title}</BreadcrumbPage>
                                        )}
                                    </BreadcrumbItem>
                                    {index < breadcrumb.length - 1 && (
                                        <BreadcrumbSeparator className={index === 0 ? "hidden md:block" : ""} />
                                    )}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
            </div>
        </SidebarInset>
        <Toaster />
    </SidebarProvider>
}
