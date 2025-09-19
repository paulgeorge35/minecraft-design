"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const ForceUnicode = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          language: {
            ...settings.language,
            font: {
              ...settings.language.font,
              forceUnicode: !settings.language.font.forceUnicode,
            },
          },
        });
      }}
    >
      Force Unicode Font: {settings.language.font.forceUnicode ? "ON" : "OFF"}
    </Button>
  );
};
