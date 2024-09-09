import { Asterisk } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderLogo() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Link
        className="flex flex-row gap-2 items-center justify-center"
        href={"/"}
      >
        <Asterisk className={`w-6 h-6 ${loading ? "animate-spin" : ""}`} />
        <span className="font-bold hidden md:flex font-mono">
        {!pathname.includes("docs") && <span>asterisk/</span>}ui
        </span>
      </Link>
    </>
  );
}
