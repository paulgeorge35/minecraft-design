"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const BiomeBlend = ({ className }: { className?: string }) => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Biome Blend"
      value={settings.video.biomeBlend}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, biomeBlend: value },
        })
      }
      min={0}
      max={7}
      labels={{
        0: "OFF (Fastest)",
        1: "3x3 (Fast)",
        2: "5x5 (Normal)",
        3: "7x7 (High)",
        4: "9x9 (Very High)",
        5: "11x11 (Extreme)",
        6: "13x13 (Showoff)",
        7: "15x15 (Maximum)",
      }}
      className={className}
    />
  );
};
