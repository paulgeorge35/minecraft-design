import Link from "next/link";
import { Fragment } from "react";
import { Button, buttonVariants } from "../../_components/button";
import { Fov } from "../_components/fov";

export default function Options() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Options
      </h1>
      <div className="flex min-w-fit flex-col justify-center gap-24">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <Fov />
          <Link href="/options/online" className={buttonVariants()}>
            Online...
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <Link href="/options/skin-customization" className={buttonVariants()}>
            Skin Customization...
          </Link>
          <Link href="/options/music-and-sounds" className={buttonVariants()}>
            Music & Sounds...
          </Link>
          <Link href="/options/video-settings" className={buttonVariants()}>
            Video Settings...
          </Link>
          <Link href="/options/controls" className={buttonVariants()}>
            Controls...
          </Link>
          <Link href="/options/language" className={buttonVariants()}>
            Language...
          </Link>
          <Link href="/options/chat-settings" className={buttonVariants()}>
            Chat Settings...
          </Link>
          <Link href="/options/resource-packs" className={buttonVariants()}>
            Resource Packs...
          </Link>
          <Link
            href="/options/accessibility-settings"
            className={buttonVariants()}
          >
            Accessibility Settings...
          </Link>
          <Button disabled tooltip="Telemetry is disabled.">
            Telemetry Data...
          </Button>
          <Link
            href="/options/credits-and-attribution"
            className={buttonVariants()}
          >
            Credits & Attribution...
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
