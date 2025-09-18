"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const GlintSpeed = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Glint Speed"
      value={settings.video.glintSpeed}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, glintSpeed: value },
        })
      }
      min={0}
      max={100}
      labels={{
        0: "OFF",
      }}
      tooltip="Controls how fast the visual glint shimmers accross enchanted items."
    />
  );
};
