import Link from "next/link";
import EvervaultCard from "@/components/ui/evervault-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const EvervaultCardExample = () => {
  return (
    <div
      className={cn(
        "border bg-background mt-8 rounded-lg p-6 flex items-center justify-center"
      )}
    >
      <div
        className={cn(
          "relative border md:min-h-[500px] min-h-[450px] w-full bg-background box-content p-6 flex flex-col justify-start max-w-[350px] gap-4"
        )}
      >
        <span
          className={cn(
            "absolute w-px h-px -left-px -top-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-left-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-top-1"
          )}
        ></span>
        <span
          className={cn(
            "absolute w-px h-px -right-px -top-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-right-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-top-1"
          )}
        ></span>
        <span
          className={cn(
            "absolute w-px h-px -right-px -bottom-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-right-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-bottom-1"
          )}
        ></span>
        <span
          className={cn(
            "absolute w-px h-px -left-px -bottom-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-left-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-bottom-1"
          )}
        ></span>
        <EvervaultCard className={cn("text-2xl font-bold")}>
          hover
        </EvervaultCard>
        <div className={cn("flex flex-col flex-1 justify-between")}>
          <div>
            Hover over this card to reveal an effect. Inspired from the customer
            grid on the{" "}
            <Link
              href={"https://evervault.com/customers"}
              className="text-fuchsia-600 dark:text-fuchsia-400"
            >
              Evervault website.
            </Link>
          </div>
          <div className={cn("flex flex-row gap-2")}>
            <Badge variant={"outline"}>Next.js</Badge>
            <Badge variant={"outline"}>TailwindCSS</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvervaultCardExample;
