"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const DiscreteScrolling = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            mouse: {
              ...settings.controls.mouse,
              discreteScroll: !settings.controls.mouse.discreteScroll,
            },
          },
        });
      }}
    >
      Discrete Scrolling:{" "}
      {settings.controls.mouse.discreteScroll ? "ON" : "OFF"}
    </Button>
  );
};
