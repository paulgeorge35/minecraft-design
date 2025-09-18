"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const ChatTextOpacity = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Chat Text Opacity"
      value={settings.chat.chatTextOpacity}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, chatTextOpacity: value },
        })
      }
      min={10}
      max={100}
    />
  );
};
