import { Logo } from "@/components/logo"
import ThemeButton from "@/components/ui/ThemeButton"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus, Radius } from "lucide-react"
import { dark } from '@clerk/themes';
import { MobileSidebar } from "./mobile-sidebar"
import { FormPopover } from "@/components/form/form-popover"

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center dark:bg-neutral-900">
            <MobileSidebar />
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex -mr-4">
                    <Logo />
                </div>

                <FormPopover>
                    <Button size="sm" className="rounded-sm block md:hidden">
                        <Plus className="h-4 w-4" />
                    </Button>
                </FormPopover>

                <ThemeButton />
            </div>
            
            <div className="ml-auto flex items-center gap-x-4">
                
                <FormPopover align="start" side="bottom" sideOffset={18}>
                    <Button size="sm" className="rounded-sm hidden mr-6 md:block h-auto  py-1.5 px-2">
                        Create
                    </Button>
                </FormPopover>
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        baseTheme: dark,
                        elements: {   
                           
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#1f004d"
                            
                        },
                        },
                    }}
                    
                    
                />

                <UserButton 
                    afterSignOutUrl="/"
                    
                />
            </div>

        </nav>
    )
}
  