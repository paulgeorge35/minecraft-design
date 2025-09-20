"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const HighContrastBlockOutlines = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            highContrastBlockOutlines:
              !settings.accessibility.highContrastBlockOutlines,
          },
        });
      }}
      tooltip="Enhances the block outline contrast of the targeted block."
    >
      High Contrast Block Outlines:{" "}
      {settings.accessibility.highContrastBlockOutlines ? "ON" : "OFF"}
    </Button>
  );
};
