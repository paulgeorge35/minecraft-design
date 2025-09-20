"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const HideLightningFlashes = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            hideLightningFlashes: !settings.accessibility.hideLightningFlashes,
          },
        });
      }}
      tooltip="Prevents Lightning Bolts from making the sky flash. The bolts themselves will still be visible."
    >
      Hide Lightning Flashes:{" "}
      {settings.accessibility.hideLightningFlashes ? "ON" : "OFF"}
    </Button>
  );
};
