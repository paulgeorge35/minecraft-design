import { Fragment } from "react";
import { Button } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import { Spinner } from "@/app/_components/spinner";

export default function ResourcePacks() {
  return (
    <Fragment>
      <div className="relative flex w-full flex-col items-center p-4 font-minecraft">
        <h1 className="text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] text-xl">
          Select Resource Packs
        </h1>
        <p className="text-[#aaaaaa] text-shadow-[2px_2px_0_#3f3f3f] text-xl">
          Dragn and drop files into this window to add packs
        </p>
      </div>
      <div className="grid grow grid-cols-[400px_400px] gap-x-12 gap-y-2">
        <div className="relative flex grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2">
          <div className="absolute inset-0 border-black border-y-2 bg-black/60" />
          <h2 className="z-1 font-bold font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] text-xl underline">
            Available
          </h2>
          <Spinner />
        </div>
        <div className="relative flex grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2">
          <div className="absolute inset-0 border-black border-y-2 bg-black/60" />
          <h2 className="z-1 font-bold font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] text-xl underline">
            Selected
          </h2>
          <Spinner />
        </div>
      </div>
      <span className="mt-auto grid w-full max-w-3xl grid-cols-2 gap-4 p-4">
        <Button>Open Pack Folder</Button>
        <DoneButton />
      </span>
    </Fragment>
  );
}
