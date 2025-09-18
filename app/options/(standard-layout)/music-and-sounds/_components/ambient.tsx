"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const Ambient = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Ambient/Environment"
      value={settings.musicAndSounds.ambient}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, ambient: value },
        })
      }
    />
  );
};
