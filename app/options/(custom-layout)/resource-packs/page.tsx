import { Button } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import { Spinner } from "@/app/_components/spinner";
import { Fragment } from "react";

export default function ResourcePacks() {
  return (
    <Fragment>
      <div className="flex flex-col items-center w-full relative p-4 font-minecraft">
        <h1 className="text-xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
          Select Resource Packs
        </h1>
        <p className="text-xl text-[#aaaaaa] text-shadow-[2px_2px_0_#3f3f3f]">
          Dragn and drop files into this window to add packs
        </p>
      </div>
      <div className="grid grid-cols-[400px_400px] gap-x-12 gap-y-2 grow">
        <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] relative">
          <div className="absolute inset-0 bg-black/60 border-y-2 border-black" />
          <h2 className="text-xl font-bold font-minecraft z-1 text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] underline">
            Available
          </h2>
          <Spinner />
        </div>
        <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] relative">
          <div className="absolute inset-0 bg-black/60 border-y-2 border-black" />
          <h2 className="text-xl font-bold font-minecraft z-1 text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] underline">
            Selected
          </h2>
          <Spinner />
        </div>
      </div>
      <span className="p-4 mt-auto w-full max-w-3xl grid grid-cols-2 gap-4">
        <Button>Open Pack Folder</Button>
        <DoneButton />
      </span>
    </Fragment>
  );
}
