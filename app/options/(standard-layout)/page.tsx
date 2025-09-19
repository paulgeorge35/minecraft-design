import { Fragment } from "react";
import { LinkButton } from "@/app/_components/link-button";
import { Button } from "../../_components/button";
import { Fov } from "../_components/fov";

export default function Options() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Options
      </h1>
      <div className="flex w-3xl flex-col justify-center gap-24">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <Fov />
          <LinkButton href="/options/online">Online...</LinkButton>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <LinkButton href="/options/skin-customization">
            Skin Customization...
          </LinkButton>
          <LinkButton href="/options/music-and-sounds">
            Music & Sounds...
          </LinkButton>
          <LinkButton href="/options/video-settings">
            Video Settings...
          </LinkButton>
          <LinkButton href="/options/controls">Controls...</LinkButton>
          <LinkButton href="/options/language">Language...</LinkButton>
          <LinkButton href="/options/chat-settings">
            Chat Settings...
          </LinkButton>
          <LinkButton href="/options/resource-packs">
            Resource Packs...
          </LinkButton>
          <LinkButton href="/options/accessibility-settings">
            Accessibility Settings...
          </LinkButton>
          <Button disabled tooltip="Telemetry is disabled.">
            Telemetry Data...
          </Button>
          <LinkButton href="/options/credits-and-attribution">
            Credits & Attribution...
          </LinkButton>
        </div>
      </div>
    </Fragment>
  );
}
