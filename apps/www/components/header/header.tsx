"use client";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { CommandMenu } from "@/components/header/command-menu";
import HeaderLogo from "@/components/header/header-logo";
import HeaderPage from "@/components/header/header-page";
import MobileNav from "@/components/header/mobile-nav";

export default function Header() {
  return (
    <div className="flex flex-row px-6 py-3 items-center justify-between w-full bg-transparent backdrop-blur sticky top-0 z-50">
      <div className="flex flex-row gap-4 items-center">
        <HeaderLogo />
        <HeaderPage />
      </div>
      <div className="flex flex-row gap-4 items-center w-full md:w-fit">
        <CommandMenu />
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
