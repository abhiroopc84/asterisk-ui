import SidebarNav from "@/components/docs-sidebar/sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/docs";
import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 items-start flex flex-row">
      <div className="h-[calc(100vh-4rem)] sticky top-16 w-1/5 hidden md:block">
        <ScrollArea className="h-full pt-6 pb-11">
          <SidebarNav config={docsConfig} />
        </ScrollArea>
      </div>
      {children}
    </div>
  );
}
