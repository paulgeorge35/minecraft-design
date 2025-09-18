"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const Resolution = ({ className }: { className?: string }) => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Fullscreen Resolution"
      value={settings.video.resolution}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, resolution: value },
        })
      }
      min={1}
      max={6}
      labels={{
        1: "Current",
        2: "2560x1664@60 (24bit)",
        3: "2560x1600@60 (24bit)",
        4: "2048x1332@60 (24bit)",
        5: "2048x1280@60 (24bit)",
        6: "1920x1200@60 (24bit)",
      }}
      className={className}
    />
  );
};
