import { Fragment } from "react";

export default function KeyBinds() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Key Binds
      </h1>
      <div className="relative flex w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2 p-4">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-3xl flex-col justify-center gap-12">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2"></div>
        </div>
      </div>
    </Fragment>
  );
}
