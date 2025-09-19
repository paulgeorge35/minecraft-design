"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const MenuBlur = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Menu Blur"
      value={settings.video.menuBackgroundBlur}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, menuBackgroundBlur: value },
        })
      }
      min={0}
      max={10}
      unit=""
      labels={{
        0: "OFF",
      }}
      tooltip="Changes the blurriness of menu backgrounds."
    />
  );
};
