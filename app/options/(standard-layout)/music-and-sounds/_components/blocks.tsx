"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const Blocks = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Blocks"
      value={settings.musicAndSounds.blocks}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, blocks: value },
        })
      }
    />
  );
};
