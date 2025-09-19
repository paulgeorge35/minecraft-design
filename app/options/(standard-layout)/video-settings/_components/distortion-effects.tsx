"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const DistortionEffects = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Distortion Effects"
      value={settings.video.distortionEffects}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, distortionEffects: value },
        })
      }
      min={0}
      max={100}
      labels={{
        0: "OFF",
      }}
      tooltip="Strength of nausea and Nether portal screen distortion effects. At lower values, the nausea effect is replaced with a green overlay."
    />
  );
};
