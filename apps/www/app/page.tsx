"use client";

import { Button } from "@/components/ui/button";
import TerminalTextHoverEffect from "@/components/ui/terminal-text-hover-effect";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-[calc(100vh-4rem)] p-6">
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-2">
          <TerminalTextHoverEffect className="text-4xl font-bold hidden md:flex">
            great design. made easy.
          </TerminalTextHoverEffect>
          <div className="flex flex-col md:hidden">
            <TerminalTextHoverEffect className="text-4xl font-bold">
              great design.
            </TerminalTextHoverEffect>
            <TerminalTextHoverEffect className="text-4xl font-bold">
              made easy.
            </TerminalTextHoverEffect>
          </div>
          <p>
            Beautiful animated components built with Next.js, Tailwind CSS,
            shadcn/ui and Framer Motion.
          </p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Button
            className="dark:bg-yellow-500/30 dark:text-yellow-400 hover:dark:bg-yellow-500/20 hover:dark:text-yellow-400 bg-yellow-100 text-yellow-600 hover:bg-yellow-100/90 hover:text-yellow-600"
            asChild
          >
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button variant={"ghost"}>
            <Github className="w-4 h-4" />
          </Button>
        </div>
        <div>
          <a
            href="https://www.producthunt.com/posts/asterisk-ui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-asterisk&#0045;ui"
            target="_blank"
            className="flex dark:hidden"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=487962&theme=light"
              alt="asterisk&#0047;ui - Beautiful&#0032;animated&#0032;components&#0032;built&#0032;with&#0032;Framer&#0032;Motion&#0046; | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
          <a
            href="https://www.producthunt.com/posts/asterisk-ui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-asterisk&#0045;ui"
            target="_blank"
            className="dark:flex hidden"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=487962&theme=dark"
              alt="asterisk&#0047;ui - Beautiful&#0032;animated&#0032;components&#0032;built&#0032;with&#0032;Framer&#0032;Motion&#0046; | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
