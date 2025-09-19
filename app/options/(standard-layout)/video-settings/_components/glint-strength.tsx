"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const GlintStrength = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Glint Strength"
      value={settings.video.glintStrength}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, glintStrength: value },
        })
      }
      min={0}
      max={100}
      labels={{
        0: "OFF",
      }}
      tooltip="Controls how transparent the visual glint is on enchanted items."
    />
  );
};
