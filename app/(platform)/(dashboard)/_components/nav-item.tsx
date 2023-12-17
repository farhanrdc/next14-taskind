"use client"

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Activity,
  Layout,
  Settings,
} from "lucide-react";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
    id:string;
    slug:string;
    imageUrl:string;
    name:string;

}

interface NavItemProps {
    isActive: boolean;
    isExpanded: boolean;
    organization: Organization;
    onExpand: (id:string) => void;
}

export const NavItem = ({
    isActive,
    isExpanded,
    organization,
    onExpand
}: NavItemProps) => {

    const router = useRouter()
    const pathname = usePathname()


    const routes = [
        {
            label:"Boards",
            icon: <Layout className="w-5 h-5 mr-2" />,
            href: `/organization/${organization.id}`
        },
        {
            label:"Activity",
            icon: <Activity className="w-5 h-5 mr-2" />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label:"Settings",
            icon: <Settings className="w-5 h-5 mr-2" />,
            href: `/organization/${organization.id}/settings`
        },
        
    ]

    const onClick = (href:string) => {
        router.push(href)
    }

    return(
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn("flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline dark:text-neutral-100",
                isActive && isExpanded && "bg-sky-500/10 text-sky-800 dark:text-sky-200"
                )}
                
            >
                <div className="flex items-center gap-x-2">
                    <div className="relative w-7 h-7">
                        <Image 
                            fill
                            src={organization.imageUrl}
                            alt="Organization"
                            className="rounded-md object-cover"
                        />
                    </div>

                    <span className="font-medium text-sm">
                        {organization.name}
                    </span>
                </div>

            </AccordionTrigger>

            <AccordionContent className="pt-2 text-neutral-700 dark:text-neutral-200">
                {routes.map((route) => (
                    <Button
                        key={route.href}
                        onClick={() => onClick(route.href)}
                        size="sm"
                        className={cn(
                            "w-full font-normal justify-start pl-10 mb-1",
                            pathname === route.href && "bg-sky-500/10 text-sky-800 dark:text-sky-200"
                        )}
                        variant="ghost"
                    >
                        {route.icon}
                        {route.label}

                    </Button>
                ))}

            </AccordionContent>

        </AccordionItem>
    )
}

NavItem.Skeleton = function SkeletonNavItem(){
    return(
        <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 relative shrink-0">
                <Skeleton className="w-full h-full absolute"/>
            </div>
            
            <Skeleton className="w-full h-10"/>
        </div>
    )
}