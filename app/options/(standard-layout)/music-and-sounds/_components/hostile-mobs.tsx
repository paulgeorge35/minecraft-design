"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const HostileMobs = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Hostile Mobs"
      value={settings.musicAndSounds.hostileMobs}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, hostileMobs: value },
        })
      }
    />
  );
};
