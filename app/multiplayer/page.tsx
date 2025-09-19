import { Button } from "../_components/button";
import { DoneButton } from "../_components/done-button";
import { Spinner } from "../_components/spinner";

export default function Multiplayer() {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Play Multiplayer
      </h1>
      <div className="relative flex w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2 p-4">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="z-1 flex w-fit min-w-xl flex-col justify-center">
          <p className="text-center font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] text-xl">
            Scanning for games on your local network
          </p>
          <Spinner className="!text-[#aaaaaa] p-0" />
        </div>
      </div>
      <span className="mt-auto grid w-full max-w-3xl grid-cols-4 gap-2 p-4">
        <span className="col-span-4 grid grid-cols-3 gap-2">
          <Button disabled>Join a Server</Button>
          <Button>Direct Connection</Button>
          <Button>Add Server</Button>
        </span>
        <Button disabled>Edit</Button>
        <Button disabled>Delete</Button>
        <Button>Refresh</Button>
        <DoneButton label="Back" />
      </span>
    </div>
  );
}
