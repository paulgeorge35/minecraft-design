import Link from "next/link";
import { Fragment } from "react";
import { buttonVariants } from "@/app/_components/button";
import { AutoJump, OperatorItemsTab, Sneak, Sprint } from "./_components";

export default function Controls() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Controls
      </h1>
      <div className="relative flex w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2 p-4">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-fit min-w-xl flex-col justify-center gap-12">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Link
              href="/options/controls/mouse-settings"
              className={buttonVariants()}
            >
              Mouse Settings...
            </Link>
            <Link
              href="/options/controls/key-binds"
              className={buttonVariants()}
            >
              Key Binds...
            </Link>
            <Sneak />
            <Sprint />
            <AutoJump />
            <OperatorItemsTab />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
