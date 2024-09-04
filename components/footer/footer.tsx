"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className={`flex flex-row p-6 items-center w-full sticky top-0 z-50 text-sm ${pathname.includes("docs") ? "border-t" : "border-t-0"}`}>
      <span>
        built by{" "}
        <Link
          href={"https://abhiroop.me/"}
          className="underline underline-offset-2"
        >
          abhiroop
        </Link>
        . source code available on{" "}
        <Link
          href={"https://github.com/abhiroopc84/swirl-ui"}
          className="underline underline-offset-2"
        >
          github
        </Link>
        .
      </span>
    </div>
  );
}
