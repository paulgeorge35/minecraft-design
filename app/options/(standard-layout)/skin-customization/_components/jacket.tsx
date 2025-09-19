"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const Jacket = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          skinCustomization: {
            ...settings.skinCustomization,
            jacket: !settings.skinCustomization.jacket,
          },
        });
      }}
    >
      Jacket: {settings.skinCustomization.jacket ? "ON" : "OFF"}
    </Button>
  );
};
