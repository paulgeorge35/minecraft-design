"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const CommandSuggestions = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            commandSuggestions: !settings.chat.commandSuggestions,
          },
        });
      }}
    >
      Command Suggestions: {settings.chat.commandSuggestions ? "ON" : "OFF"}
    </Button>
  );
};
