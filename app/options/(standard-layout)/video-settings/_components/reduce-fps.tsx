"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  type ReduceFpsWhen as ReduceFpsWhenType,
  SettingsContext,
} from "@/app/_components/settings-context";

export const ReduceFpsWhen = () => {
  const reduceFpsWhen: ReduceFpsWhenType[] = ["afk", "minimized"];
  const reduceFpsWhenLabels: Record<ReduceFpsWhenType, string> = {
    afk: "AFK",
    minimized: "Minimized",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            reduceFpsWhen:
              reduceFpsWhen[
                (reduceFpsWhen.indexOf(settings.video.reduceFpsWhen) + 1) %
                  reduceFpsWhen.length
              ],
          },
        });
      }}
      tooltip={
        settings.video.reduceFpsWhen === "afk"
          ? "Limits framerate to 30 when the game is not getting any player input for more than a minute. Further limits it to 10 after 9 more minutes."
          : "Limits framerate only when the game window is minimized."
      }
    >
      Reduce FPS when: {reduceFpsWhenLabels[settings.video.reduceFpsWhen]}
    </Button>
  );
};
