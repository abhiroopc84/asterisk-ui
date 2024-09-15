import TerminalTextHoverEffect from "@/components/ui/terminal-text-hover-effect";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

const TerminalTextHoverEffectLandingExample = () => {
  return (
    <div
      className={cn(
        "rounded-lg p-6 flex items-center justify-center"
      )}
    >
      <div className="flex flex-row gap-2 border rounded-md py-2 px-3 items-center absolute bottom-2 right-2">
        <span className="text-sm">Hover on the text</span>
        <Info className="w-4 h-4" />
      </div>
      <div className="px-2 md:px-8 py-16 w-fit flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <TerminalTextHoverEffect className="text-lg">
            Hover over me
          </TerminalTextHoverEffect>
        </div>
      </div>
    </div>
  );
};

export default TerminalTextHoverEffectLandingExample;
