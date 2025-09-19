"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const Music = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Music"
      value={settings.musicAndSounds.music}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, music: value },
        })
      }
    />
  );
};
