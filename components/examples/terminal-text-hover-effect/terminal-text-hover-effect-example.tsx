import TerminalTextHoverEffect from "@/components/ui/terminal-text-hover-effect";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

const TerminalTextHoverEffectExample = () => {
  return (
    <div
      className={cn(
        "border bg-background mt-8 rounded-lg p-6 flex items-center justify-center"
      )}
    >
      <div className="flex flex-row gap-2 border rounded-lg py-2 px-3 items-center absolute bottom-2 right-2">
        <span className="text-sm">Hover on the text</span>
        <Info className="w-4 h-4" />
      </div>
      <div className="px-8 py-16 w-fit flex flex-col gap-4">
        <h2 className="text-xs uppercase font-mono">Valorant Agents</h2>
        <div className="flex flex-col gap-1">
          <TerminalTextHoverEffect>
            Duelists - Raze Jett Reyna Neon Yoru Phoenix Iso
          </TerminalTextHoverEffect>
          <TerminalTextHoverEffect>
            Initiators - Gekko Sova Kayo Fade Breach Skye
          </TerminalTextHoverEffect>
          <TerminalTextHoverEffect>
            Controllers - Omen Clove Viper Harbor Astra Brim
          </TerminalTextHoverEffect>
          <TerminalTextHoverEffect>
            Sentinels - Cypher Killjoy Chamber Sage Deadlock Vyse
          </TerminalTextHoverEffect>
        </div>
      </div>
    </div>
  );
};

export default TerminalTextHoverEffectExample;
