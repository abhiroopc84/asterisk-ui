import AnimatedPerspectiveGrid from "@/components/ui/animated-perspective-grid";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

const AnimatedPerspectiveGridExample = ({
  variant = "emerge",
}: {
  variant: "parallax" | "emerge" | "cascade";
}) => {
  return (
    <div
      className={cn(
        "border bg-background mt-8 rounded-lg p-6 flex items-center justify-center overflow-y-hidden"
      )}
    >
      <AnimatedPerspectiveGrid
        variant={variant}
        src="/img"
        fileExt="png"
        className="h-[50vh]"
      >
        Find a way through them.
      </AnimatedPerspectiveGrid>
      <div className="flex flex-row gap-2 border rounded-md py-2 px-3 items-center absolute bottom-2 right-2">
        <span className="text-sm">Scroll</span>
        <Info className="w-4 h-4" />
      </div>
    </div>
  );
};

export default AnimatedPerspectiveGridExample;
