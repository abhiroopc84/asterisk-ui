"use client";

import { ModeToggle } from "../theme/mode-toggle";
import { CommandMenu } from "./command-menu";
import HeaderLogo from "./header-logo";
import HeaderPage from "./header-page";
import MobileNav from "./mobile-nav";

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
