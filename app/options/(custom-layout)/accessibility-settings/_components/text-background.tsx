"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  SettingsContext,
  type TextBackground as TextBackgroundType,
} from "@/app/_components/settings-context";

export const TextBackground = () => {
  const textBackground: TextBackgroundType[] = ["chat", "everywhere"];
  const textBackgroundLabels: Record<TextBackgroundType, string> = {
    chat: "Chat",
    everywhere: "Everywhere",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          accessibility: {
            ...settings.accessibility,
            textBackground:
              textBackground[
                (textBackground.indexOf(settings.accessibility.textBackground) +
                  1) %
                  textBackground.length
              ],
          },
        });
      }}
      className="capitalize"
    >
      Text Background:{" "}
      {textBackgroundLabels[settings.accessibility.textBackground]}
    </Button>
  );
};
