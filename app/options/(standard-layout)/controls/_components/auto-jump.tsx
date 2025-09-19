"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const AutoJump = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            autoJump: !settings.controls.autoJump,
          },
        });
      }}
    >
      Auto Jump: {settings.controls.autoJump ? "ON" : "OFF"}
    </Button>
  );
};
