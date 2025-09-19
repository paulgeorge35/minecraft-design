"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import { SettingsContext } from "@/app/_components/settings-context";

export const AllowServerListings = () => {
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() =>
        setSettings({
          ...settings,
          online: {
            ...settings.online,
            allowServerListings: !settings.online.allowServerListings,
          },
        })
      }
      tooltip="Servers may list online players as part of their public status. With this option off, your name will not show up in such lists."
    >
      Allow Server Listings:{" "}
      {settings.online.allowServerListings ? "ON" : "OFF"}
    </Button>
  );
};
