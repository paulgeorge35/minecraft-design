"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const Brightness = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Brightness"
      value={settings.video.brightness}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, brightness: value },
        })
      }
      min={0}
      max={100}
      unit=""
      labels={{
        0: "Moody",
        50: "Default",
        100: "Bright",
      }}
    />
  );
};
