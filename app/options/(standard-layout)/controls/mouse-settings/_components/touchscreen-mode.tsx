"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const TouchscreenMode = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            mouse: {
              ...settings.controls.mouse,
              touchscreenMode: !settings.controls.mouse.touchscreenMode,
            },
          },
        });
      }}
    >
      Touchscreen Mode: {settings.controls.mouse.touchscreenMode ? "ON" : "OFF"}
    </Button>
  );
};
