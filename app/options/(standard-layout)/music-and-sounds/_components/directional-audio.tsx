"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const DirectionalAudio = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          musicAndSounds: {
            ...settings.musicAndSounds,
            directionalAudio: !settings.musicAndSounds.directionalAudio,
          },
        });
      }}
      tooltip={
        settings.musicAndSounds.directionalAudio
          ? "Uses HRTF-based directional audio to improve the simulation of 3D sound. Requires HRTF compatible audio hardware, and is best experienced with headphones."
          : "Classic Stereo sound."
      }
    >
      Directional Audio:{" "}
      {settings.musicAndSounds.directionalAudio ? "ON" : "OFF"}
    </Button>
  );
};
