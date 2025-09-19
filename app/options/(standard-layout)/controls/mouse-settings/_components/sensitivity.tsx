"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const Sensitivity = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Sensitivity"
      value={settings.controls.mouse.sensitivity}
      onChange={(value) =>
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            mouse: { ...settings.controls.mouse, sensitivity: value },
          },
        })
      }
      min={0}
      max={200}
      labels={{
        0: "*ywan*",
        200: "HYPERSPEED!!!",
      }}
    />
  );
};
