"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  type Clouds as CloudsType,
  SettingsContext,
} from "@/app/_components/settings-context";

export const Clouds = () => {
  const clouds: CloudsType[] = ["fast", "fancy", "off"];
  const cloudsLabels: Record<CloudsType, string> = {
    fast: "Fast",
    fancy: "Fancy",
    off: "OFF",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            clouds:
              clouds[
                (clouds.indexOf(settings.video.clouds) + 1) % clouds.length
              ],
          },
        });
      }}
    >
      Clouds: {cloudsLabels[settings.video.clouds]}
    </Button>
  );
};
