"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const Sprint = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            sprint: settings.controls.sprint === "hold" ? "toggle" : "hold",
          },
        });
      }}
    >
      Sprint: {settings.controls.sprint === "hold" ? "Hold" : "Toggle"}
    </Button>
  );
};
