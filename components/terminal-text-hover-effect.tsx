"use client";

import { useState, useRef, useEffect } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

const lettersAndSymbols = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", 
  "%", "^", "&", "*", "-", "_", "+", "=", ";", ":", "<", ">", ","
];

const TerminalChar = ({
  char,
  delay,
  trigger,
}: {
  char: string;
  delay: number;
  trigger?: boolean;
}) => {
  const controls = useAnimation();
  const originalChar = useRef(char);
  const charRef = useRef(null);
  const [currentChar, setCurrentChar] = useState(char);
  const [blockOpacity, setBlockOpacity] = useState(0);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>();

  const animation = async () => {
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
      animate(charRef.current, { opacity: 0 });
      setTimeoutID(setTimeout(() => animation(), delay * 1000));
    }
  }, [trigger]);

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

const TerminalText = ({
  trigger,
  children,
}: {
  trigger: boolean;
  children: string;
}) => {
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

const TerminalTextHoverEffect = ({ children, className }: { children: string, className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
