"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const Colors = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            colors: !settings.chat.colors,
          },
        });
      }}
    >
      Colors: {settings.chat.colors ? "ON" : "OFF"}
    </Button>
  );
};
