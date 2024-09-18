"use client";

import React, { ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  MotionProps,
  useTransform,
  MotionValue,
  easeInOut,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  variant: string;
}

interface GridWrapProps extends MotionProps {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  variant: string;
}

interface GridItemProps extends MotionProps {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  variant: string;
  index: number;
}

interface GridItemInnerProps extends MotionProps {
  imageUrl: string;
  scrollYProgress: MotionValue<number>;
  variant: string;
}

interface AnimatedPerspectiveGridProps {
  variant: string;
  imageCount?: number;
  src: string | string[];
  fileExt: string;
  className?: string;
  children?: ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, variant }) => {
  const perspective: Record<string, string> = {
    parallax: "1000px",
    emerge: "1500px",
    cascade: "3000px",
  };

  const padding: Partial<Record<string, string>> = {
    emerge: "100vh 0 75vh 0",
    cascade: "75vh 0",
  };

  return (
    <div
      className="relative grid place-items-center p-8 w-full overflow-x-clip overflow-y-clip"
      style={{ perspective: perspective[variant], padding: padding[variant] }}
    >
      {children}
    </div>
  );
};

Grid.displayName = "Grid";

const GridWrap: React.FC<GridWrapProps> = ({
  children,
  scrollYProgress,
  variant,
  ...motionProps
}) => {
  const z: Partial<Record<string, MotionValue<number>>> = {
    emerge: useTransform(scrollYProgress, [0, 1], [0, 6500]),
  };

  const transformOrigin: Partial<Record<string, string>> = {
    cascade: "0% 50%",
  };

  const rotateY: Record<string, number | MotionValue<number>> = {
    parallax: 25,
    emerge: 0,
    cascade: 30,
  };

  const gridCols: Record<string, string> = {
    parallax: "repeat(4, minmax(0, 1fr))",
    emerge: "repeat(8, minmax(0, 1fr))",
    cascade: "repeat(3, minmax(0, 1fr))",
  };

  const width: Record<string, string> = {
    parallax: "100%",
    emerge: "105%",
    cascade: "50%",
  };

  const gap: Record<string, string> = {
    parallax: "2vw",
    emerge: "2vw",
    cascade: "1vw",
  };

  const x: Partial<Record<string, string>> = {
    cascade: "-75%",
  };

  return (
    <motion.div
      className="h-auto grid"
      style={{
        transformStyle: "preserve-3d",
        z: z[variant],
        rotateY: rotateY[variant],
        width: width[variant],
        gridTemplateColumns: gridCols[variant],
        gap: gap[variant],
        x: x[variant],
        transformOrigin: transformOrigin[variant],
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

const GridItem: React.FC<GridItemProps> = ({
  children,
  scrollYProgress,
  variant,
  index,
  ...motionProps
}) => {
  const x: Partial<Record<string, MotionValue<string> | MotionValue<number>>> =
    {
      parallax: useTransform(
        scrollYProgress,
        [0, 1],
        [
          `${Math.floor(Math.random() * (-500 + 1000) - 1000)}%`,
          `${Math.floor(Math.random() * (1000 - 500) + 500)}%`,
        ]
      ),
      emerge: useTransform(
        scrollYProgress,
        [0, 1],
        [`0%`, `${Math.floor(Math.random() * (150 + 150) - 150)}%`]
      ),
    };

  const y: Partial<Record<string, MotionValue<string> | MotionValue<number>>> =
    {
      emerge: useTransform(
        scrollYProgress,
        [0, 1],
        [`0%`, `${Math.floor(Math.random() * (300 + 300) - 300)}%`]
      ),
    };

  const z: Record<string, number | MotionValue<number>> = {
    parallax: Math.floor(Math.random() * (200 + 1600) - 1600),
    emerge: Math.floor(Math.random() * (-2000 + 5000) - 5000),
    cascade: useTransform(scrollYProgress, [0, 0.5, 1], [0, 500, 0], {
      ease: easeInOut,
    }),
  };

  const rotateX: Partial<Record<string, MotionValue<number>>> = {
    emerge: useTransform(
      scrollYProgress,
      [0, 1],
      [Math.floor(Math.random() * (-25 + 65) - 65), 0]
    ),
    cascade: useTransform(scrollYProgress, [0, 1], [-70, 70]),
  };

  const transformOrigin: Partial<Record<string, string>> = {
    emerge: "50% 0%",
    cascade: "50% 0%",
  };

  const filter: Record<string, MotionValue<string>> = {
    parallax: useTransform(
      scrollYProgress,
      [0, 1],
      ["brightness(100%)", "brightness(100%)"]
    ),
    emerge: useTransform(
      scrollYProgress,
      [0, 1],
      ["brightness(0%)", "brightness(200%)"]
    ),
    cascade: useTransform(
      scrollYProgress,
      [0, 1],
      ["brightness(120%)", "brightness(0%)"]
    ),
  };

  const aspectRatio: Record<string, number> = {
    parallax: 1.5,
    emerge: 1.5,
    cascade: 0.8,
  };

  return (
    <motion.div
      className="w-full h-auto overflow-hidden relative rounded-lg grid place-items-center"
      style={{
        x: x[variant],
        y: y[variant],
        filter: filter[variant],
        rotateX: rotateX[variant],
        aspectRatio: aspectRatio[variant],
        z: z[variant],
        transformOrigin: transformOrigin[variant],
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

const GridItemInner: React.FC<GridItemInnerProps> = ({
  imageUrl,
  scrollYProgress,
  variant,
  ...motionProps
}) => {
  const scaleInner = useTransform(scrollYProgress, [0, 1], [2, 0.5]);

  const dimensions: Record<string, string> = {
    parallax: "200%",
    emerge: "125%",
    cascade: "175%",
  };

  return (
    <motion.div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        scale: scaleInner,
        width: dimensions[variant],
        height: dimensions[variant],
      }}
      {...motionProps}
    />
  );
};

const AnimatedPerspectiveGrid: React.FC<AnimatedPerspectiveGridProps> = ({
  variant,
  imageCount = 49,
  src,
  fileExt,
  className,
  children,
}) => {
  const outerDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: outerDivRef,
  });

  const right: Partial<Record<string, string>> = {
    parallax: "4vw",
    cascade: "2vw",
  };

  const bottom: Partial<Record<string, string>> = {
    emerge: "50%",
    cascade: "50%",
  };

  const childrenWidth: Partial<Record<string, string>> = {
    cascade: "20vw",
  };

  const gridItems = Array.from({ length: imageCount }, (_, i) => i);

  const getPath = (index: number): string => {
    if (typeof src === "string") {
      return `${src}/${index}.${fileExt}`;
    } else if (
      Array.isArray(src) &&
      src.every((item) => typeof item === "string")
    ) {
      return src[index];
    }
    return "";
  };

  return (
    <div
      ref={outerDivRef}
      className={cn("w-full overflow-auto h-[100vh]", className)}
    >
      <Grid variant={variant}>
        <GridWrap scrollYProgress={scrollYProgress} variant={variant}>
          {gridItems.map((item) => (
            <GridItem
              key={item}
              scrollYProgress={scrollYProgress}
              variant={variant}
              index={item}
            >
              <GridItemInner
                imageUrl={getPath(item)}
                variant={variant}
                scrollYProgress={scrollYProgress}
              />
            </GridItem>
          ))}
        </GridWrap>
        <div
          className="absolute font-semibold text-5xl"
          style={{
            right: right[variant],
            bottom: bottom[variant],
            width: childrenWidth[variant],
          }}
        >
          {children}
        </div>
      </Grid>
    </div>
  );
};

export default AnimatedPerspectiveGrid;
