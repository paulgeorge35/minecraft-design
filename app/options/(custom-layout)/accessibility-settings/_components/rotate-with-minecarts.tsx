"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const RotateWithMinecarts = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() =>
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            rotateWithMinecarts: !settings.accessibility.rotateWithMinecarts,
          },
        })
      }
      disabled
      tooltip="Wether the player's view should rotate with a turning Minecart. Only available in worlds with the 'Minecart Improvements' experimental settings turned on."
    >
      Rotate With Minecarts:{" "}
      {settings.accessibility.rotateWithMinecarts ? "ON" : "OFF"}
    </Button>
  );
};
