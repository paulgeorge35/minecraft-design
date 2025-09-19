"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const Device = ({ className }: { className?: string }) => {
  const { settings } = use(SettingsContext);
  return (
    <Button className={className}>
      Device: {settings.musicAndSounds.device}
    </Button>
  );
};
