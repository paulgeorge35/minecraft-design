"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const Device = ({ className }: { className?: string }) => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button className={className}>
      Device: {settings.musicAndSounds.device}
    </Button>
  );
};
