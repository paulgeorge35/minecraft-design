"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface TooltipProps {
  content?: string;
  children: React.ReactNode;
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [childrenRect, setChildrenRect] = useState<DOMRect | null>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  const updateChildrenRect = () => {
    if (childrenRef.current) {
      setChildrenRect(childrenRef.current.getBoundingClientRect());
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsVisible(true);
    updateChildrenRect();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isFocused) {
      setIsVisible(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsVisible(true);
    updateChildrenRect();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!isHovering) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (!content) return;
    const handleResize = () => {
      if (isVisible && childrenRef.current) {
        updateChildrenRect();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible, content]);

  if (!content) return children;

  return (
    <>
      <div
        tabIndex={-1}
        ref={childrenRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="grid w-full"
      >
        {children}
        <div
          tabIndex={-1}
          className={cn(
            "fixed z-50 bg-black/90 text-white font-minecraft text-shadow-[2px_2px_0_#3f3f3f] text-lg pointer-events-none max-w-100 word-wrap-break-word p-[3px] pixel-corners",
            {
              hidden: !isVisible,
            }
          )}
          style={{
            left: isHovering ? cursorPosition.x + 10 : undefined,
            top: isHovering
              ? cursorPosition.y + 20
              : isFocused && childrenRect
              ? childrenRect.bottom + 5
              : undefined,
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-violet-800/50 to-violet-800/20 pixel-corners p-[2px]">
            <div className="w-full h-full bg-black/90 pixel-corners px-2">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
