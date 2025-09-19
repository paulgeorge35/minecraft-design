"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const Jukebox = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Jukebox/Note Blocks"
      value={settings.musicAndSounds.jukebox}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, jukebox: value },
        })
      }
    />
  );
};
