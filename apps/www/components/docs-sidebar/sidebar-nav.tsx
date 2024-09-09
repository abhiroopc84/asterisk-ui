"use client";

import { usePathname } from "next/navigation";
import { type DocsConfig } from "@/config/docs";
import { SidebarNavItems } from "@/components/docs-sidebar/sidebar-nav-items";
import { cn } from "@/lib/utils";

export default function SidebarNav({
  config,
  setNavOpen,
}: {
  config: DocsConfig;
  setNavOpen?: (navOpen: boolean) => void;
}) {
  const pathname = usePathname();

  const items = config.sidebarNav;

  return items.length ? (
    <div className="w-full md:px-12">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-xs uppercase text-muted-foreground font-mono">
            {item.title}
          </h4>
          {item?.items?.length && (
            <SidebarNavItems items={item.items} pathname={pathname} setNavOpen={setNavOpen}/>
          )}
        </div>
      ))}
    </div>
  ) : null;
}
