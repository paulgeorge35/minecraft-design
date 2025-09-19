"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const Hat = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          skinCustomization: {
            ...settings.skinCustomization,
            hat: !settings.skinCustomization.hat,
          },
        });
      }}
    >
      Hat: {settings.skinCustomization.hat ? "ON" : "OFF"}
    </Button>
  );
};
