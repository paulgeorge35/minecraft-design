"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const HighContrast = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            highContrast: !settings.accessibility.highContrast,
          },
        });
      }}
      tooltip="Enhances the contrast of UI elements."
    >
      High Contrast: {settings.accessibility.highContrast ? "ON" : "OFF"}
    </Button>
  );
};
