"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const WebLinks = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            webLinks: !settings.chat.webLinks,
          },
        });
      }}
    >
      Web Links: {settings.chat.webLinks ? "ON" : "OFF"}
    </Button>
  );
};
