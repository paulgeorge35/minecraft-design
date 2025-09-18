"use client";

import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";
import { use } from "react";

export const OperatorItemsTab = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          controls: {
            ...settings.controls,
            operatorItemsTab: !settings.controls.operatorItemsTab,
          },
        });
      }}
    >
      Operator Items Tab: {settings.controls.operatorItemsTab ? "ON" : "OFF"}
    </Button>
  );
};
