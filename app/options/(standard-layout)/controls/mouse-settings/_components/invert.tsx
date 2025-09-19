"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const Invert = () => {
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
              invert: !settings.controls.mouse.invert,
            },
          },
        });
      }}
    >
      Invert Mouse: {settings.controls.mouse.invert ? "ON" : "OFF"}
    </Button>
  );
};
