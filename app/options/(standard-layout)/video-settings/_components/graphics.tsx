"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  type Graphics as GraphicsType,
  SettingsContext,
} from "@/app/_components/settings-context";

export const Graphics = () => {
  const graphics: GraphicsType[] = ["fast", "fancy", "fabulous"];
  const graphicsLabels: Record<GraphicsType, string> = {
    fast: "Fast",
    fancy: "Fancy",
    fabulous: "Fabulous!",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            graphics:
              graphics[
                (graphics.indexOf(settings.video.graphics) + 1) %
                  graphics.length
              ],
          },
        });
      }}
      tooltip={
        settings.video.graphics === "fast"
          ? "Fast graphics reduces the amount of visible rain and snow. Transparency effects are disabled for various blocks such as leaves."
          : settings.video.graphics === "fancy"
            ? "Fancy graphics balances performance and quality for the majority of machines. Weather, clouds and particles may not appear behind translucent blocks or water."
            : "Fabulous! graphics uses screen shaders for drawing weather, clouds and particles behind translucent blocks and water. This may severely impact performance for portable devices and 4K displays."
      }
    >
      Graphics: {graphicsLabels[settings.video.graphics]}
    </Button>
  );
};
