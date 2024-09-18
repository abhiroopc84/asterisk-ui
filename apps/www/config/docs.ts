import { SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Animated Perspective Grid",
          href: "/docs/components/animated-perspective-grid",
          items: [],
          label: "New",
        },
        {
          title: "Evervault Card",
          href: "/docs/components/evervault-card",
          items: [],
        },
        {
          title: "Terminal Text Hover Effect",
          href: "/docs/components/terminal-text-hover-effect",
          items: [],
        },
        {
          title: "Unblur Text",
          href: "/docs/components/unblur-text",
          items: [],
        },
      ],
    },
  ],
};
