"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const Fov = () => {
  const { settings, setSettings } = use(SettingsContext);
  console.log("settings.fov", settings.fov);
  return (
    <Slider
      label="FOV"
      min={30}
      max={110}
      labels={{
        70: "Normal",
        110: "Quake Pro",
      }}
      value={settings.fov ?? 70}
      onChange={(value) => {
        console.log(value);
        setSettings({ ...settings, fov: value });
      }}
    />
  );
};
