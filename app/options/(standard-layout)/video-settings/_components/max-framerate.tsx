"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const MaxFramerate = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Max Framerate"
      value={settings.video.maxFramerate}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, maxFramerate: value },
        })
      }
      min={10}
      max={260}
      step={10}
      labels={{
        260: "Unlimited",
      }}
      unit=" fps"
    />
  );
};
