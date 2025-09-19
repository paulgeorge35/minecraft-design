"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  type ChatVisibility,
  SettingsContext,
} from "@/app/_components/settings-context";

export const Chat = () => {
  const chat: ChatVisibility[] = ["shown", "hidden", "commands-only"];
  const chatLabels: Record<ChatVisibility, string> = {
    shown: "Shown",
    "commands-only": "Commands Only",
    hidden: "Hidden",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            chat: chat[(chat.indexOf(settings.chat.chat) + 1) % chat.length],
          },
        });
      }}
    >
      Chat: {chatLabels[settings.chat.chat]}
    </Button>
  );
};
