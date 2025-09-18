"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const TextBackgroundOpacity = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Text Background Opacity"
      value={settings.chat.textBackgroundOpacity}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, textBackgroundOpacity: value },
        })
      }
      min={0}
      max={100}
    />
  );
};
