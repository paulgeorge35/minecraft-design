"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const ReducedDebugInfo = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          chat: {
            ...settings.chat,
            reducedDebugInfo: !settings.chat.reducedDebugInfo,
          },
        });
      }}
    >
      Reduced Debug Info: {settings.chat.reducedDebugInfo ? "ON" : "OFF"}
    </Button>
  );
};
