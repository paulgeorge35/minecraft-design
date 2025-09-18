"use client";

import { Button } from "@/app/_components/button";
import {
  MusicFrequency as MusicFrequencyType,
  SettingsContext,
} from "@/app/_components/settings-context";
import { use } from "react";

export const MusicFrequency = () => {
  const frequencies: MusicFrequencyType[] = ["default", "frequent", "constant"];
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          musicAndSounds: {
            ...settings.musicAndSounds,
            musicFrequency:
              frequencies[
                (frequencies.indexOf(settings.musicAndSounds.musicFrequency) +
                  1) %
                  frequencies.length
              ],
          },
        });
      }}
      tooltip="Changes how frequently music plays while in a game world."
      className="capitalize"
    >
      Music Frequency: {settings.musicAndSounds.musicFrequency}
    </Button>
  );
};
