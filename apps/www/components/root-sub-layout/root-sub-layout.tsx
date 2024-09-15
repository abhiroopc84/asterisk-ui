"use client"

import { ReactNode, useEffect } from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { usePathname } from "next/navigation";

export default function RootSubLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={`min-h-screen flex flex-col relative ${pathname === "/" && "overflow-y-hidden"}`}>
      <Header />
      <div className="flex-1 h-[calc(100vh-4rem)]">{children}</div>
      <Footer />
    </div>
  );
}
