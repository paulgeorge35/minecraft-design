"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const SmoothLightning = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            smoothLighting: !settings.video.smoothLighting,
          },
        });
      }}
    >
      Smooth Lightning: {settings.video.smoothLighting ? "ON" : "OFF"}
    </Button>
  );
};
