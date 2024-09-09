import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarNav from "../docs-sidebar/sidebar-nav";
import { Asterisk, Menu, X } from "lucide-react";
import { docsConfig } from "@/config/docs";
import { useState } from "react";
import { ModeToggle } from "../theme/mode-toggle";

export default function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Sheet open={navOpen} onOpenChange={setNavOpen}>
      <SheetTrigger className="flex items-center md:hidden">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col items-start w-dvw pt-4 md:hidden"
        side={"left"}
      >
        <SheetHeader className="flex flex-row items-center justify-between w-full space-y-0">
          <SheetTitle className="flex flex-row items-center gap-2">
              <Asterisk className="w-6 h-6" />
              asterisk/ui
          </SheetTitle>
          <div className="flex flex-row items-center gap-2">
            <ModeToggle />
            <SheetClose>
              <X className="w-5 h-5" />
            </SheetClose>
          </div>
        </SheetHeader>
        <SidebarNav config={docsConfig} setNavOpen={setNavOpen} />
      </SheetContent>
    </Sheet>
  );
}
