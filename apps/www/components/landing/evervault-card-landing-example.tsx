import Link from "next/link";
import EvervaultCard from "@/components/ui/evervault-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

const EvervaultCardLandingExample = ({
  children,
  tag,
  content,
}: {
  children: string | ReactElement;
  tag: string;
  content: string,
}) => {
  return (
    <div className={cn("rounded-lg flex items-center justify-center")}>
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
        <EvervaultCard>
          {children}
        </EvervaultCard>
        <div className={cn("flex flex-col flex-1 justify-between")}>
          <div>
            {content}
          </div>
          <div className={cn("flex flex-row gap-2")}>
            <Badge variant={"outline"} className="border-fuchsia-600 dark:border-fuchsia-400">{tag}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvervaultCardLandingExample;
