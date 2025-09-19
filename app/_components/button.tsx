"use client";

import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Tooltip } from "./tooltip";

export const buttonVariants = cva(
  "py-1 h-[50px] flex items-center justify-center relative group border-3 border-[#080808] bg-[#6e6e6e] text-shadow-[2px_2px_0_#3f3f3f] text-nowrap hover:border-[#f9f9f9] focus:border-[#f9f9f9] hover:cursor-pointer focus:outline-none font-minecraft text-2xl text-[#f9f9f9] disabled:pointer-events-none bg-[url('/stone-texture.webp')] bg-repeat bg-[length:48px_48px] before:content-[''] before:absolute before:inset-0 before:border-l-3 before:border-t-3 before:border-[#aaaaaa] after:content-[''] after:absolute after:inset-0 after:border-r-3 after:border-b-3 after:border-black/20",
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  tooltip?: string;
}

export const Button = ({
  children,
  className,
  tooltip,
  ...props
}: ButtonProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLButtonElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const padding = -6;

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.scrollWidth + 2 * padding;
        const containerWidth = containerRef.current.clientWidth;
        setIsOverflowing(textWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  useEffect(() => {
    if (!isOverflowing) {
      setTranslateX(0);
      return;
    }
    const textElement = textRef.current;
    const containerElement = containerRef.current;
    if (!textElement || !containerElement) return;

    const textWidth = textElement.scrollWidth;
    const containerWidth = containerElement.clientWidth;
    const maxTranslate = textWidth - containerWidth + padding;

    let animationId: number;
    let direction = 1;
    let currentTranslate = 0;
    const speed = 0.5;
    const pauseDuration = 60;
    let pauseCounter = 0;

    const animate = () => {
      if (pauseCounter > 0) {
        pauseCounter--;
      } else {
        currentTranslate += direction * speed;

        if (currentTranslate >= maxTranslate) {
          currentTranslate = maxTranslate;
          direction = -1;
          pauseCounter = pauseDuration;
        } else if (currentTranslate <= -padding) {
          currentTranslate = -padding;
          direction = 1;
          pauseCounter = pauseDuration;
        }
      }

      setTranslateX(-currentTranslate);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isOverflowing]);

  const buttonComponent = (
    <button
      {...props}
      ref={containerRef}
      className={cn("overflow-hidden", buttonVariants({ className }))}
    >
      <div className="absolute inset-0 hidden bg-black/50 group-disabled:block" />
      <div className="relative w-full overflow-hidden">
        <div
          ref={textRef}
          className="button-text mx-auto w-fit text-nowrap px-4 transition-transform duration-100 ease-linear"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </button>
  );

  return tooltip ? (
    <Tooltip content={tooltip}>{buttonComponent}</Tooltip>
  ) : (
    buttonComponent
  );
};
