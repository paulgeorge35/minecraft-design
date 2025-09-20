"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const DarknessPulsing = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Darkness Pulsing"
      value={settings.accessibility.darknessPulsing}
      onChange={(value) =>
        setSettings({
          ...settings,
          accessibility: { ...settings.accessibility, darknessPulsing: value },
        })
      }
      min={0}
      max={100}
      labels={{
        0: "OFF",
      }}
      tooltip="Controls how much the Darkness effect pulses when a Warden or Sculk Shrieker gives it to you."
    />
  );
};
