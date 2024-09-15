import { cn } from "@/lib/utils"
import { SidebarNavItem } from "@/types/nav"
import Link from "next/link"

interface SidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
  setNavOpen?: (navOpen: boolean) => void
}

export function SidebarNavItems({
  items,
  pathname,
  setNavOpen,
}: SidebarNavItemsProps) {
  return items?.length ? (
    <div className="flex flex-col snap-y">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            onClick={() => setNavOpen?.(false)}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 active:text-fuchsia-600 active:dark:text-fuchsia-400 md:hover:dark:text-fuchsia-400 md:hover:text-fuchsia-600 md:hover:scale-105 transition ease-in-out",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "text-fuchsia-600 dark:text-fuchsia-400"
                : ""
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}