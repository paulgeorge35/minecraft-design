"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const ViewBobbing = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            viewBobbing: !settings.video.viewBobbing,
          },
        });
      }}
    >
      View Bobbing: {settings.video.viewBobbing ? "ON" : "OFF"}
    </Button>
  );
};
