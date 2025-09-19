"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const RealmsNewsInvites = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() =>
        setSettings({
          ...settings,
          online: {
            ...settings.online,
            realmsNewsInvites: !settings.online.realmsNewsInvites,
          },
        })
      }
      tooltip="Fetches Realms news and invites in the title screen and displays their respective icon on the Realms button."
    >
      Realms News & Invites: {settings.online.realmsNewsInvites ? "ON" : "OFF"}
    </Button>
  );
};
