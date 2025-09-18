"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const Subtitles = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          musicAndSounds: {
            ...settings.musicAndSounds,
            subtitles: !settings.musicAndSounds.subtitles,
          },
        });
      }}
    >
      Subtitles: {settings.musicAndSounds.subtitles ? "ON" : "OFF"}
    </Button>
  );
};
