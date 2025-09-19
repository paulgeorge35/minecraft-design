"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const MainHand = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          skinCustomization: {
            ...settings.skinCustomization,
            mainHand:
              settings.skinCustomization.mainHand === "left" ? "right" : "left",
          },
        });
      }}
    >
      Main Hand:{" "}
      {settings.skinCustomization.mainHand === "left" ? "Left" : "Right"}
    </Button>
  );
};
