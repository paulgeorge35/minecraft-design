"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const PanoramaScrollSpeed = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Panorama Scroll Speed"
      value={settings.accessibility.panoramaScrollSpeed}
      onChange={(value) =>
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            panoramaScrollSpeed: value,
          },
        })
      }
      min={0}
      max={100}
    />
  );
};
