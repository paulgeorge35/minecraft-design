"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const RenderDistance = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Render Distance"
      value={settings.video.renderDistance}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, renderDistance: value },
        })
      }
      min={2}
      max={32}
      unit=" chunks"
    />
  );
};
