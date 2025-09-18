"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const ScrollSensitivity = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Scroll Sensitivity"
      value={Number(settings.controls.mouse.scrollSensitivity.toFixed(2))}
      onChange={(value) =>
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            mouse: { ...settings.controls.mouse, scrollSensitivity: value },
          },
        })
      }
      min={0.1}
      max={10}
      unit=""
      step={0.1}
    />
  );
};
