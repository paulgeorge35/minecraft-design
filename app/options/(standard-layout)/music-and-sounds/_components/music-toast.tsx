"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const MusicToast = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          musicAndSounds: {
            ...settings.musicAndSounds,
            musicToast: !settings.musicAndSounds.musicToast,
          },
        });
      }}
      tooltip="Displays a toast whenever a song starts playing. The same toast is constantly displayed in the in-game pause menu while a song is playing."
    >
      Show Music Toast: {settings.musicAndSounds.musicToast ? "ON" : "OFF"}
    </Button>
  );
};
