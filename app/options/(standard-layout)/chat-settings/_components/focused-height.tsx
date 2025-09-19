"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const FocusedHeight = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Focused Height"
      value={settings.chat.focusedHeight}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, focusedHeight: value },
        })
      }
      min={20}
      max={180}
      unit=" px"
    />
  );
};
