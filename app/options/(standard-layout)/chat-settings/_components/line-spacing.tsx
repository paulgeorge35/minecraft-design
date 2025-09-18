"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const LineSpacing = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Line Spacing"
      value={settings.chat.lineSpacing}
      onChange={(value) =>
        setSettings({
          ...settings,
          chat: { ...settings.chat, lineSpacing: value },
        })
      }
      min={0}
      max={100}
    />
  );
};
