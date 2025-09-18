"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const OnlySecureChat = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            onlyShowSecureChat: !settings.chat.onlyShowSecureChat,
          },
        });
      }}
      tooltip="Only display messages from other players that can be verified to have been sent by that player, and have not been modified."
    >
      Only Show Secure Chat: {settings.chat.onlyShowSecureChat ? "ON" : "OFF"}
    </Button>
  );
};
