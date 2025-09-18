"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const FriendlyMobs = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Friendly Mobs"
      value={settings.musicAndSounds.friendlyMobs}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, friendlyMobs: value },
        })
      }
    />
  );
};
