"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const Fullscreen = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            fullScreen: !settings.video.fullScreen,
          },
        });
      }}
    >
      Fullscreen: {settings.video.fullScreen ? "ON" : "OFF"}
    </Button>
  );
};
