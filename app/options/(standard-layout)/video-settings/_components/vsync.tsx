"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const Vsync = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            vsync: !settings.video.vsync,
          },
        });
      }}
    >
      VSync: {settings.video.vsync ? "ON" : "OFF"}
    </Button>
  );
};
