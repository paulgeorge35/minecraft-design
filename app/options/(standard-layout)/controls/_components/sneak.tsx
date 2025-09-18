"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const Sneak = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            sneak: settings.controls.sneak === "hold" ? "toggle" : "hold",
          },
        });
      }}
    >
      Sneak: {settings.controls.sneak === "hold" ? "Hold" : "Toggle"}
    </Button>
  );
};
