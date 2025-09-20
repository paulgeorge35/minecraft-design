"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const NarratorHotkey = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            narratorHotkey: !settings.accessibility.narratorHotkey,
          },
        });
      }}
      tooltip="Allows the Narrator to be toggled on and off with 'Cmd+B'"
    >
      Narrator Hotkey: {settings.accessibility.narratorHotkey ? "ON" : "OFF"}
    </Button>
  );
};
