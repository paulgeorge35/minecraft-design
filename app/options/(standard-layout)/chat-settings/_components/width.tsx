"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const Width = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Width"
      value={Number(settings.chat.width.toFixed(1))}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, width: value },
        })
      }
      min={40}
      max={320}
      unit=" px"
    />
  );
};
