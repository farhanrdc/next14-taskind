import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Logo } from "@/components/logo";
import ThemeButton from "@/components/ui/ThemeButton";


export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b bg-white shadow-sm flex items-center dark:bg-neutral-900">
      
      <Logo />
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">       
        <ThemeButton />
        <div className="space-x-4 md:block md:w-auto flex flex-row items-center justify-between w-full">  
          <Button size="sm" variant="default" asChild>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">
              Get Taskify for free
            </Link>
          </Button>
        
        </div>
      </div>
    </div>
  );
};