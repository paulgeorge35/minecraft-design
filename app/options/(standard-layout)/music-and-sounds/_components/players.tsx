"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const Players = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Players"
      value={settings.musicAndSounds.players}
      onChange={(value) =>
        setSettings({
          ...settings,
          musicAndSounds: { ...settings.musicAndSounds, players: value },
        })
      }
    />
  );
};
