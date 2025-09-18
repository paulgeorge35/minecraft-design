"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const EntityDistance = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Entity Distance"
      value={settings.video.entityDistance}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, entityDistance: value },
        })
      }
      min={50}
      max={500}
      step={25}
    />
  );
};
