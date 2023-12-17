import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import ThemeButton from "./ui/ThemeButton";


const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.jpg"
          alt="Logo"
          height={30}
          width={30}
        />
        <p className={cn(
          "text-lg text-neutral-700 dark:text-neutral-200 pb-1",
          headingFont.className,
        )}>
          TaskInd
        </p>
        <div className="ml-4">
        </div>
      </div>
    </Link>
  );
};