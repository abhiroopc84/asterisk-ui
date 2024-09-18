import UnblurText from "@/components/ui/unblur-text";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

const UnblurTextExample = ({
  variant = "blur",
}: {
  variant: "blur" | "brighten" | "stretch" | "skew";
}) => {
  return (
    <div
      className={cn(
        "border bg-background mt-8 rounded-lg p-6 flex items-center justify-center"
      )}
    >
      <div className="flex flex-row gap-2 border rounded-md py-2 px-3 items-center absolute bottom-2 right-2">
        <span className="text-sm">Scroll</span>
        <Info className="w-4 h-4" />
      </div>
      <div className="px-2 md:px-8 py-8 w-fit flex flex-col gap-4">
        <UnblurText variant={variant} className="md:text-lg">
          Brimstone, for years the search to understand my own past drove me...
          I thought I could find peace by knowing who I am, who I was, but no.
          The truth has only led to more questions more frustration. I... I lack
          focus. I lack clarity. I am no longer an asset to the Protocol. I am
          going to leave for some time. I intend to recover and I intend to
          return. I will find my own path along the way. Do not follow me.
        </UnblurText>
      </div>
    </div>
  );
};

export default UnblurTextExample;
