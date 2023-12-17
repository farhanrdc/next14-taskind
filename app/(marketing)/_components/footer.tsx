
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-[70px] p-4 border-t bg-white dark:bg-neutral-800">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline">
            Privacy Policy
          </Button>
          <Button size="sm" variant="outline">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};