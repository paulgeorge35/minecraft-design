"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const Narrator = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            narrator: !settings.chat.narrator,
          },
        });
      }}
    >
      Narrator: {settings.chat.narrator ? "ON" : "OFF"}
    </Button>
  );
};
