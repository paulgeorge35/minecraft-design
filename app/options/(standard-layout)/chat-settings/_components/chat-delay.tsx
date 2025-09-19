"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const ChatDelay = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Chat Delay"
      value={Number(settings.chat.chatDelay.toFixed(1))}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, chatDelay: value },
        })
      }
      min={0}
      max={6}
      step={0.1}
      unit=" second(s)"
      labels={{
        0: "None",
      }}
    />
  );
};
