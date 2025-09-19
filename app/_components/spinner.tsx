"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const pattern = [0, 1, 2, 1];
    let patternIndex = 0;

    const interval = setInterval(() => {
      setActiveIndex(pattern[patternIndex]);
      patternIndex = (patternIndex + 1) % pattern.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 p-2 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]",
        className,
      )}
    >
      {Array.from([0, 1, 2]).map((x, index) => (
        <span
          key={`spinner-${x}`}
          className={cn({
            uppercase: activeIndex === index,
          })}
        >
          o
        </span>
      ))}
    </div>
  );
};
