"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const UnfocusedHeight = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Unfocused Height"
      value={settings.chat.unfocusedHeight}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, unfocusedHeight: value },
        })
      }
      min={20}
      max={180}
      unit=" px"
    />
  );
};
