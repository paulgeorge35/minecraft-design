"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const MasterVolume = ({ className }: { className?: string }) => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Master Volume"
      value={settings.musicAndSounds.masterVolume}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, masterVolume: value },
        })
      }
      className={className}
    />
  );
};
