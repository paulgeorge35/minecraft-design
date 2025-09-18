"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const AutosaveIndicator = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            autosaveIndicator: !settings.video.autosaveIndicator,
          },
        });
      }}
    >
      Autosave Indicator: {settings.video.autosaveIndicator ? "ON" : "OFF"}
    </Button>
  );
};
