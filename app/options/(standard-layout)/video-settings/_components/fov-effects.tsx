"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const FovEffects = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="FOV Effects"
      value={settings.video.fovEffects}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, fovEffects: value },
        })
      }
      min={0}
      max={100}
      labels={{
        0: "OFF",
      }}
      tooltip="Controls how much the field of view can change with gameplay effects."
    />
  );
};
