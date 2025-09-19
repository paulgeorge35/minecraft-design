import { Fragment } from "react";
import { AllowServerListings, RealmsNewsInvites } from "./_components";

export default function Online() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Online
      </h1>
      <div className="relative flex w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2 p-4">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-fit flex-col justify-center gap-12">
          <div className="grid grid-cols-2 gap-4">
            <RealmsNewsInvites />
            <AllowServerListings />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
