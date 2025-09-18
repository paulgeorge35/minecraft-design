"use client";

import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";
import { use } from "react";

export const SimulationDistance = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Simulation Distance"
      value={settings.video.simulationDistance}
      onChange={(value) =>
        setSettings({
          ...settings,
          video: { ...settings.video, simulationDistance: value },
        })
      }
      min={2}
      max={32}
      unit=" chunks"
    />
  );
};
