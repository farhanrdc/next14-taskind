"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false) //This is to help us to prevent hydration error while using zustand state or components like models or sheet component

  const onOpen = useMobileSidebar((state) => state.onOpen)
  const onClose = useMobileSidebar((state) => state.onClose)
  const isOpen = useMobileSidebar((state) => state.isOpen)

  useEffect(() => {
    setIsMounted(true)
  },[]) // only if isMounted = true, we gonna render the component on return

  useEffect(() => {
    onClose()
  },[pathname, onClose]) // whenever url change, the mobilesidebar will close

  if(!isMounted) return null

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-3"
        variant="outline"
        size="sm"
      >
        <Menu className="w-4 h-4"/>
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose} >
        <SheetContent side="left" className="p-2 pt-10" >
          <Sidebar 
            key="t-sidebar-mobile-state"
          />
        </SheetContent>
      </Sheet>
    </>
  )
}
