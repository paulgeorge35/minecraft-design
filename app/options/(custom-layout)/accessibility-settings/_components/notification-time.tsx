"use client";

import { use } from "react";
import { SettingsContext } from "@/app/_components/settings-context";
import { Slider } from "@/app/_components/slider";

export const NotificationTime = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Slider
      label="Notification Time"
      value={Number(settings.accessibility.notificationTime.toFixed(1))}
      onChange={(value) =>
        setSettings({
          ...settings,
          accessibility: { ...settings.accessibility, notificationTime: value },
        })
      }
      min={0.5}
      max={10}
      step={0.1}
      unit="x"
      tooltip="Affects the length of time that all notifications stay visible on the screen."
    />
  );
};
