"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const DamageTilt = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Damage Tilt"
      value={settings.accessibility.damageTilt}
      onChange={(value) =>
        setSettings({
          ...settings,
          accessibility: { ...settings.accessibility, damageTilt: value },
        })
      }
      min={0}
      max={100}
      labels={{
        0: "OFF",
      }}
      tooltip="The amount of camera shake caused by being hurt."
    />
  );
};
