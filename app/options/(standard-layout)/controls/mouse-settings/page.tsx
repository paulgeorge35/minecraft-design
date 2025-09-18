import { Fragment } from "react";
import {
  DiscreteScrolling,
  Invert,
  ScrollSensitivity,
  Sensitivity,
  TouchscreenMode,
} from "./_components";

export default function MouseSettings() {
  return (
    <Fragment>
      <h1 className="text-2xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] p-4">
        Mouse Settings
      </h1>
      <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] w-full relative p-4">
        <div className="absolute inset-0 bg-black/40 border-y-2 border-black" />
        <div className="flex flex-col gap-12 w-fit min-w-xl justify-center">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Sensitivity />
            <Invert />
            <ScrollSensitivity />
            <DiscreteScrolling />
            <TouchscreenMode />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
