"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const EntityShadows = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            entityShadow: !settings.video.entityShadow,
          },
        });
      }}
    >
      Entity Shadows: {settings.video.entityShadow ? "ON" : "OFF"}
    </Button>
  );
};
