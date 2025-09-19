"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const Cape = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          skinCustomization: {
            ...settings.skinCustomization,
            cape: !settings.skinCustomization.cape,
          },
        });
      }}
    >
      Cape: {settings.skinCustomization.cape ? "ON" : "OFF"}
    </Button>
  );
};
