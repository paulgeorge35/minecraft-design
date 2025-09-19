"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  type AttackIndicator as AttackIndicatorType,
  SettingsContext,
} from "@/app/_components/settings-context";

export const AttackIndicator = () => {
  const attackIndicator: AttackIndicatorType[] = ["crosshair", "hotbar", "off"];
  const attackIndicatorLabels: Record<AttackIndicatorType, string> = {
    crosshair: "Crosshair",
    hotbar: "Hotbar",
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
            attackIndicator:
              attackIndicator[
                (attackIndicator.indexOf(settings.video.attackIndicator) + 1) %
                  attackIndicator.length
              ],
          },
        });
      }}
      className="capitalize"
    >
      Attack Indicator: {attackIndicatorLabels[settings.video.attackIndicator]}
    </Button>
  );
};
