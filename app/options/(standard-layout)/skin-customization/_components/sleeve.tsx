"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

type SleeveSide = "left" | "right";

export const Sleeve = ({ side }: { side: SleeveSide }) => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          skinCustomization: {
            ...settings.skinCustomization,
            sleeve: {
              ...settings.skinCustomization.sleeve,
              [side]: !settings.skinCustomization.sleeve[side],
            },
          },
        });
      }}
    >
      <span className="capitalize">{side}</span> Sleeve:{" "}
      {settings.skinCustomization.sleeve[side] ? "ON" : "OFF"}
    </Button>
  );
};
