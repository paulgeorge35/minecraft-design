"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const Weather = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Weather"
      value={settings.musicAndSounds.weather}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, weather: value },
        })
      }
    />
  );
};
