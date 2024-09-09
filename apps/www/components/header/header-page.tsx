import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderPage() {
  const pathname = usePathname();
  return (
    <Link href={"/docs"}>
      <div className="flex-row gap-4 items-center font-mono hidden md:flex">
        {pathname.includes("docs") && (
          <>
            <span className="text-primary text-sm opacity-50">/</span>
            <span>documentation</span>
          </>
        )}
      </div>
    </Link>
  );
}
