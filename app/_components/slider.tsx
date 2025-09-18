"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { Tooltip } from "./tooltip";

interface SliderProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "min" | "max"
  > {
  label?: string;
  unit?: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  labels?: Record<number, string>;
  tooltip?: string;
  className?: string;
}

const Slider = ({
  value: controlledValue,
  defaultValue,
  onChange,
  min = 0,
  max = 100,
  unit = "%",
  label,
  disabled,
  step = 1,
  labels,
  tooltip,
  className,
  ...props
}: SliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = useState(defaultValue ?? min);
  const isDragging = useRef(false);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const updateValue = useCallback(
    (newValue: number) => {
      const steppedValue = Math.round((newValue - min) / step) * step + min;
      const clampedValue = Math.max(min, Math.min(max, steppedValue));

      if (clampedValue === currentValue) return;

      if (!isControlled) {
        setInternalValue(clampedValue);
      }

      onChange?.(clampedValue);
    },
    [min, max, step, isControlled, onChange]
  );

  const getValueFromMouseEvent = useCallback(
    (event: MouseEvent | React.MouseEvent) => {
      if (!containerRef.current) return currentValue;

      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      return min + (max - min) * percentage;
    },
    [min, max, currentValue]
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;

      event.preventDefault();
      isDragging.current = true;

      const newValue = getValueFromMouseEvent(event);
      updateValue(newValue);

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current) return;
        const newValue = getValueFromMouseEvent(e);
        updateValue(newValue);
      };

      const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [disabled, getValueFromMouseEvent, updateValue]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (disabled) return;

      if (event.key === "ArrowRight") {
        updateValue(currentValue + step);
      } else if (event.key === "ArrowLeft") {
        updateValue(currentValue - step);
      }
    },
    [updateValue, currentValue, step]
  );

  const sliderComponent = (
    <div
      tabIndex={0}
      ref={containerRef}
      className={cn(
        "relative w-full h-[50px] group cursor-pointer",
        "before:content-[''] before:absolute before:inset-0 before:bg-black/50",
        "focus:outline-none",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      style={{
        background: "url(/stone-texture.webp) repeat",
        backgroundSize: "48px 48px",
      }}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
    >
      <input
        type="range"
        className="sr-only"
        value={onChange ? currentValue : undefined}
        onChange={
          onChange ? (e) => onChange(Number(e.target.value)) : undefined
        }
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        {...props}
      />
      <SliderTrack />
      <SliderThumb value={currentValue} min={min} max={max} />
      <SliderValue
        value={currentValue}
        unit={unit}
        label={label}
        labels={labels}
      />
    </div>
  );

  return tooltip ? (
    <Tooltip content={tooltip}>{sliderComponent}</Tooltip>
  ) : (
    sliderComponent
  );
};

interface SliderThumbProps {
  value: number;
  min: number;
  max: number;
}

const SliderThumb = ({ value, min, max }: SliderThumbProps) => {
  const percentage = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div
      className={cn(
        "absolute top-0 bottom-0 w-5 pointer-events-none",
        "border-3 border-[#080808]",
        "group-hover:border-[#f9f9f9] group-focus:border-[#f9f9f9] group-focus:outline-none",
        "before:content-[''] before:absolute before:inset-0 before:border-l-3 before:border-t-3 before:border-[#aaaaaa]",
        "after:content-[''] after:absolute after:inset-0 after:border-r-3 after:border-b-3 after:border-black/20"
      )}
      style={{
        left: `max(calc(${percentage}% - 20px), 0%)`,
        background: "url(/stone-texture.webp) repeat",
        backgroundSize: "48px 48px",
      }}
    />
  );
};

const SliderTrack = () => {
  return <div className="absolute inset-0 border-3 border-[#080808]" />;
};

interface SliderValue
  extends Pick<
    SliderProps,
    "value" | "unit" | "label" | "placeholder" | "labels"
  > {}

const SliderValue = ({
  value,
  unit,
  label,
  placeholder,
  labels,
}: SliderValue) => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const padding = 12;

  const text =
    value !== undefined
      ? `${label ? `${label}: ` : ""}${labels?.[value] ?? `${value}${unit}`}`
      : placeholder;

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
  }, [text]);

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

  return (
    <div
      ref={containerRef}
      className="absolute inset-[3px] py-2 overflow-hidden flex justify-center"
    >
      <div
        ref={textRef}
        className="text-2xl font-minecraft text-[#f9f9f9] text-center text-shadow-[2px_2px_0_#3f3f3f] text-nowrap transition-transform duration-100 ease-linear w-fit"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export { Slider };
