"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  type Narrator as NarratorType,
  SettingsContext,
} from "@/app/_components/settings-context";

export const Narrator = () => {
  const narrator: NarratorType[] = ["all", "chat", "system", "off"];
  const narratorLabels: Record<NarratorType, string> = {
    all: "Narrates All",
    chat: "Narrates Chat",
    system: "Narrates System",
    off: "OFF",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            narrator:
              narrator[
                (narrator.indexOf(settings.accessibility.narrator) + 1) %
                  narrator.length
              ],
          },
        });
      }}
      className="capitalize"
    >
      Narrator: {narratorLabels[settings.accessibility.narrator]}
    </Button>
  );
};
