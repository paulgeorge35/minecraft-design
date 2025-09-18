"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import { Button } from "./button";

interface DoneButtonProps {
  className?: string;
  label?: string;
}

export const DoneButton = ({ className, label = "Done" }: DoneButtonProps) => {
  const router = useRouter();
  useHotkeys("esc", () => router.back());
  return (
    <Button onClick={() => router.back()} className={className}>
      {label}
    </Button>
  );
};
