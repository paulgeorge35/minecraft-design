"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const PromptLinks = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            promptLinks: !settings.chat.promptLinks,
          },
        });
      }}
    >
      Prompt on Links: {settings.chat.promptLinks ? "ON" : "OFF"}
    </Button>
  );
};
