import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderPage() {
  const pathname = usePathname();
  return (
    <Link href={"/docs"}>
      <div className="flex flex-row gap-4 items-center">
        <span className="text-primary text-sm opacity-50">/</span>
        {pathname.includes("docs") && "Documentation"}
      </div>
    </Link>
  );
}
