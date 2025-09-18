"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const GuiScale = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            guiScale: (settings.video.guiScale + 1) % 4,
          },
        });
      }}
      className="capitalize"
    >
      GUI Scale:{" "}
      {settings.video.guiScale === 0 ? "Auto" : settings.video.guiScale}
    </Button>
  );
};
