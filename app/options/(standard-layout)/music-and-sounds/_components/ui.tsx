"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const UI = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="UI"
      value={settings.musicAndSounds.ui}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, ui: value },
        })
      }
    />
  );
};
