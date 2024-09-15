"use client";

import EvervaultCardLandingExample from "@/components/landing/evervault-card-landing-example";
import TerminalTextHoverEffectLandingExample from "@/components/landing/terminal-text-hover-effect-landing-example";
import { Button } from "@/components/ui/button";
import TerminalTextHoverEffect from "@/components/ui/terminal-text-hover-effect";
import { Github, PartyPopper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-row flex-1 gap-10 items-center justify-center h-[calc(100vh-4rem)] p-6 overflow-y-visible">
      <div className="flex flex-col items-start gap-4">
        <Link href={"https://www.producthunt.com/posts/asterisk-ui"}>
          <div className="rounded-3xl border dark:border-fuchsia-400 dark:bg-fuchsia-500/30  bg-fuchsia-100 border-fuchsia-600 px-3 py-1 flex gap-2 items-center flex-row text-xs">
            <PartyPopper className="w-3 h-3" />
            <span>{"We're live on ProductHunt!"}</span>
          </div>
        </Link>
        <div className="flex flex-col items-start gap-2">
          <TerminalTextHoverEffect className="text-4xl font-bold hidden md:flex">
            great design. made easy.
          </TerminalTextHoverEffect>
          <div className="flex flex-col items-starts md:hidden">
            <TerminalTextHoverEffect className="text-4xl font-bold">
              great design.
            </TerminalTextHoverEffect>
            <TerminalTextHoverEffect className="text-4xl font-bold">
              made easy.
            </TerminalTextHoverEffect>
          </div>
          <p className="text-left">
            Beautiful animated components built with Next.js, Tailwind CSS,
            shadcn/ui and Framer Motion.
          </p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Button asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button variant={"ghost"}>
            <Github className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="h-fit overflow-hidden lg:flex flex-col justify-center p-2 hidden">
        <div className="flex flex-row overflow-hidden px-2">
          <EvervaultCardLandingExample tag="shadcn/ui" content="Provides reusable, accessible UI components to ensure consistent styling and functionality across the application.">
            <SiShadcnui className="stroke-1 w-16 h-16" />
          </EvervaultCardLandingExample>
          <EvervaultCardLandingExample tag="Typescript" content="Ensures type safety and early error detection during development.">
            <TbBrandTypescript className="stroke-1 w-24 h-24" />
          </EvervaultCardLandingExample>
        </div>
        <div className="flex flex-row overflow-hidden px-2">
          <EvervaultCardLandingExample tag="Next.js" content="Handles routing and server-side rendering for optimized and scalable React components.">
            <TbBrandNextjs className="stroke-1 w-24 h-24" />
          </EvervaultCardLandingExample>
          <EvervaultCardLandingExample tag="Framer Motion" content="Adds smooth animations and interactions for a dynamic user experience.">
            <TbBrandFramerMotion className="stroke-1 w-24 h-24" />
          </EvervaultCardLandingExample>
        </div>
        <div className="flex flex-row overflow-hidden px-2">
          <EvervaultCardLandingExample tag="TailwindCSS" content="Provides utility classes for building responsive, clean, and modern UI designs.">
            <TbBrandTailwind className="stroke-1 w-24 h-24" />
          </EvervaultCardLandingExample>
          <EvervaultCardLandingExample tag="React" content="Facilitates building reusable and interactive components for the user interface.">
            <TbBrandReact className="stroke-1 w-24 h-24" />
          </EvervaultCardLandingExample>
        </div>
      </div>
    </div>
  );
}
