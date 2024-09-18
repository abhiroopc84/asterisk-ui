"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type VariantType = "blur" | "brighten" | "stretch" | "skew";

interface UnblurCharacterProps {
  char: string;
  charIndex: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
  variant?: VariantType;
}

interface UnblurWordProps {
  word: string;
  wordIndex: number;
  words: string[];
  totalChars: number;
  scrollYProgress: MotionValue<number>;
  variant?: VariantType;
}

interface UnblurTextProps {
  children: string;
  variant?: VariantType;
  className?: string;
}

const UnblurCharacter: React.FC<UnblurCharacterProps> = ({
  char,
  charIndex,
  totalChars,
  scrollYProgress,
  variant = "blur",
}) => {
  const revealDuration = 10 / totalChars;
  const start = charIndex / totalChars;
  const end = Math.min((charIndex + revealDuration * totalChars) / totalChars, 1);

  const blurRange = variant === "skew" ? [8, 0] : [10, 0];
  const brightnessRanges: Record<VariantType, [number, number]> = {
    blur: [100, 100],
    brighten: [30, 100],
    stretch: [50, 100],
    skew: [100, 100],
  };
  const brightnessRange = brightnessRanges[variant];
  const scaleYRange = variant === "stretch" ? [0.1, 1] : [1, 1];
  const scaleXRange = variant === "stretch" ? [1.8, 1] : [1, 1];
  const skewXRange = variant === "skew" ? [-75, 0] : [0, 0];
  const opacityRange = variant === "blur" || variant === "skew" ? [0, 1] : [1, 1];

  const filterBlurValue = useTransform(scrollYProgress, [start, end], blurRange);
  const filterBrightnessValue = useTransform(scrollYProgress, [start, end], brightnessRange);
  const scaleYValue = useTransform(scrollYProgress, [start, end], scaleYRange);
  const scaleXValue = useTransform(scrollYProgress, [start, end], scaleXRange);
  const skewXValue = useTransform(scrollYProgress, [start, end], skewXRange);
  const opacityValue = useTransform(scrollYProgress, [start, end], opacityRange);

  const filter = useTransform(() => `blur(${filterBlurValue.get()}px) brightness(${filterBrightnessValue.get()}%)`);
  const scaleY = scaleYValue;
  const scaleX = scaleXValue;
  const skewX = skewXValue;
  const opacity = opacityValue;

  return (
    <motion.span
      style={{
        display: "inline-block",
        filter,
        scaleY,
        scaleX,
        skewX,
        opacity,
      }}
    >
      {char}
    </motion.span>
  );
};

const UnblurWord: React.FC<UnblurWordProps> = ({
  word,
  wordIndex,
  words,
  totalChars,
  scrollYProgress,
  variant,
}) => {
  const chars = word.split("");
  let charCount = 0;
  words.slice(0, wordIndex).forEach((w) => (charCount += w.length));

  return chars.map((char, index) => (
    <UnblurCharacter
      key={index}
      char={char}
      charIndex={charCount + index}
      totalChars={totalChars}
      scrollYProgress={scrollYProgress}
      variant={variant}
    />
  ));
};

const UnblurText: React.FC<UnblurTextProps> = ({
  children,
  variant,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const [lineCount, setLineCount] = useState<number>(0);

  const words = children.split(" ");
  const totalChars = children.replace(/\s/g, "").length;

  useEffect(() => {
    const calculateLines = () => {
      if (containerRef.current) {
        let containerHeight = containerRef.current.clientHeight;
        const style = window.getComputedStyle(containerRef.current);
        const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        containerHeight = containerHeight - padding;
        const lineHeight = parseInt(style.lineHeight);
        const calculatedLineCount = Math.round(containerHeight / lineHeight);
        setLineCount(calculatedLineCount);
      }
    };

    calculateLines();
    window.addEventListener("resize", calculateLines);

    return () => {
      window.removeEventListener("resize", calculateLines);
    };
  }, [children]);

  return (
    <div className="h-[30vh] overflow-y-scroll overflow-x-hidden px-4" ref={ref}>
      <div style={{ height: `${400 * lineCount}vh` }} className={cn("relative", className)}>
        <motion.div ref={containerRef} className="sticky top-1/2 -translate-y-1/2">
          {words.map((word, wordIndex) => (
            <span key={wordIndex}>
              <span className="inline-block whitespace-nowrap">
                <UnblurWord
                  word={word}
                  wordIndex={wordIndex}
                  words={words}
                  totalChars={totalChars}
                  scrollYProgress={scrollYProgress}
                  variant={variant}
                />
              </span>
              {wordIndex < words.length - 1 && " "}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UnblurText;