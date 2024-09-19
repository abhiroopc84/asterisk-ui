import { TbBrandX } from "react-icons/tb";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex flex-row gap-2">
      <Button size={"icon"} variant={"ghost"} asChild>
        <Link href={"https://x.com/asterisk_ui"}>
          <TbBrandX className="h-4 w-4"/>
        </Link>
      </Button>
    </div>
  );
}
