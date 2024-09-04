"use client"

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center h-[calc(100vh-4rem)] p-6">
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-4xl font-extrabold">great design. made easy.</h1>
          <p>
            Beautiful animated components built with Next.js,
            Tailwind CSS, shadcn/ui and Framer Motion.
          </p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Button
            className="dark:bg-yellow-300 hover:dark:bg-yellow-300 hover:dark:bg-opacity-10 hover:dark:text-yellow-300 bg-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10 hover:text-yellow-400"
            asChild
          >
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button variant={"ghost"}>
            <Github className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
