"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

type PantSide = "left" | "right";
export const Pant = ({ side }: { side: PantSide }) => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          skinCustomization: {
            ...settings.skinCustomization,
            pants: {
              ...settings.skinCustomization.pants,
              [side]: !settings.skinCustomization.pants[side],
            },
          },
        });
      }}
    >
      <span className="capitalize">{side}</span> Pant Leg:{" "}
      {settings.skinCustomization.pants[side] ? "ON" : "OFF"}
    </Button>
  );
};
