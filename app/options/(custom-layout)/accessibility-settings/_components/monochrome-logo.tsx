"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const MonochromeLogo = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            monochromeLogo: !settings.accessibility.monochromeLogo,
          },
        });
      }}
      tooltip="Changes the Mojang Studios loading screen background color to black."
    >
      Monochrome Logo: {settings.accessibility.monochromeLogo ? "ON" : "OFF"}
    </Button>
  );
};
