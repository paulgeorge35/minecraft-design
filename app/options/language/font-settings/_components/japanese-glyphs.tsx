"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const JapaneseGlyphs = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          language: {
            ...settings.language,
            font: {
              ...settings.language.font,
              japaneseGlyphs: !settings.language.font.japaneseGlyphs,
            },
          },
        });
      }}
    >
      Japanese Glyph Variants:{" "}
      {settings.language.font.japaneseGlyphs ? "ON" : "OFF"}
    </Button>
  );
};
