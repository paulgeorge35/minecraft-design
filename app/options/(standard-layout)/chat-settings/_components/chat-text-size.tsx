"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const ChatTextSize = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Chat Text Size"
      value={settings.chat.chatTextSize}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, chatTextSize: value },
        })
      }
      min={0}
      max={100}
      labels={{
        0: "OFF",
      }}
    />
  );
};
