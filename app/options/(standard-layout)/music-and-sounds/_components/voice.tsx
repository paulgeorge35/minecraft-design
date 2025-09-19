"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const Voice = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Voice/Speech"
      value={settings.musicAndSounds.voice}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, voice: value },
        })
      }
    />
  );
};
