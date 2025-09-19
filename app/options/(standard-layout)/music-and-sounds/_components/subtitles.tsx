"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

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
