"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const HideMatchedNames = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            hideMatchedNames: !settings.chat.hideMatchedNames,
          },
        });
      }}
      tooltip="3rd-party Servers may send chat messages in non-standard formats. With this option on, hidden players will be matched based on chat sender names."
    >
      Hide Matched Names: {settings.chat.hideMatchedNames ? "ON" : "OFF"}
    </Button>
  );
};
