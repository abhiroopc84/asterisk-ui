"use client";

import React, { useState, useRef, useEffect } from "react";
import { animate, motion, useAnimation, AnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

const lettersAndSymbols = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$",
  "%", "^", "&", "*", "-", "_", "+", "=", ";", ":", "<", ">", ","
];

interface TerminalCharProps {
  char: string;
  delay: number;
  trigger?: boolean;
}

interface TerminalTextProps {
  trigger: boolean;
  children: string;
}

interface TerminalTextHoverEffectProps {
  children: string;
  className?: string;
}

const TerminalChar: React.FC<TerminalCharProps> = ({ char, delay, trigger }) => {
  const controls: AnimationControls = useAnimation();
  const originalChar = useRef<string>(char);
  const charRef = useRef<HTMLDivElement>(null);
  const [currentChar, setCurrentChar] = useState<string>(char);
  const [blockOpacity, setBlockOpacity] = useState<number>(0);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout | undefined>();

  const animation = async (): Promise<void> => {
    await controls.start({
      opacity: [0, 1],
      transition: { duration: 0.1 },
    });
    for (let i = 0; i < 3; i++) {
      setCurrentChar(
        lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)]
      );
      if (i === 0) {
        setBlockOpacity(0);
      }
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    setCurrentChar(originalChar.current);
  };

  useEffect(() => {
    if (trigger) {
      clearTimeout(timeoutID);
      if (charRef.current) {
        animate(charRef.current, { opacity: 0 });
      }
      setTimeoutID(setTimeout(() => animation(), delay * 1000));
    }
  }, [trigger, delay]);

  return (
    <motion.div
      animate={controls}
      onAnimationStart={() => setBlockOpacity(1)}
      ref={charRef}
      className={`
        inline-block leading-[0.9] uppercase relative after:content-['']
        after:w-[1ch] after:absolute after:top-0 after:left-0
        after:bg-foreground after:h-full ${
          blockOpacity === 0 ? "after:opacity-0" : "after:opacity-1"
        }`}
    >
      {currentChar}
    </motion.div>
  );
};

const TerminalText: React.FC<TerminalTextProps> = ({ trigger, children }) => {
  return (
    <span className="hover-effect cursor-pointer group">
      {Array.from(children).map((char, index) => (
        char === " " ? (
          <div key={index} className="inline-block">{"\u00A0"}</div>
        ) : (
          <TerminalChar
            key={index}
            char={char}
            delay={index * 0.07}
            trigger={trigger}
          />
        )
      ))}
    </span>
  );
};

const TerminalTextHoverEffect: React.FC<TerminalTextHoverEffectProps> = ({ children, className }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = (): void => setIsHovered(true);
  const handleMouseLeave = (): void => setIsHovered(false);

  return (
    <div
      className={cn("flex items-start font-mono", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TerminalText trigger={isHovered}>{children}</TerminalText>
    </div>
  );
};

export default TerminalTextHoverEffect;