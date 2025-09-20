"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const HideSplashTexts = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            hideSplashTexts: !settings.accessibility.hideSplashTexts,
          },
        });
      }}
      tooltip="Hides the yellow splash text in the main menu."
    >
      Hide Splash Texts: {settings.accessibility.hideSplashTexts ? "ON" : "OFF"}
    </Button>
  );
};
