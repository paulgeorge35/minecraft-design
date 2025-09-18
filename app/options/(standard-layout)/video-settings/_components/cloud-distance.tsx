"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const CloudDistance = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Cloud Distance"
      value={settings.video.cloudDistance}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, cloudDistance: value },
        })
      }
      min={2}
      max={128}
      unit=" chunks"
    />
  );
};
