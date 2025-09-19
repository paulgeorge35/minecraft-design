"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const MinmapLevels = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Minmap Levels"
      value={settings.video.minmapLevels}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, minmapLevels: value },
        })
      }
      min={0}
      max={4}
      unit=""
      labels={{
        0: "OFF",
      }}
    />
  );
};
