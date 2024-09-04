import { Asterisk, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarNav from "../docs-sidebar/sidebar-nav";
import { docsConfig } from "@/config/docs";

export default function HeaderLogo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Link
        className="flex-row gap-2 items-center justify-center hidden md:flex"
        href={"/"}
      >
        <Asterisk className={`w-6 h-6 ${loading ? "animate-spin" : ""}`} />
        <span className="font-bold text-lg hidden md:flex">ui</span>
      </Link>
      <Sheet>
        <SheetTrigger className="flex items-center md:hidden">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col items-start md:hidden"
          side={"left"}
        >
          <SheetHeader>
            <SheetTitle className="flex flex-row items-center gap-2">
              <Asterisk className="w-6 h-6" />
              norm/ui
            </SheetTitle>
          </SheetHeader>
          <SidebarNav config={docsConfig} />
        </SheetContent>
      </Sheet>
    </>
  );
}
