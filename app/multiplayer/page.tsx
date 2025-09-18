import { Button } from "../_components/button";
import { DoneButton } from "../_components/done-button";
import { Spinner } from "../_components/spinner";

export default function Multiplayer() {
  return (
    <div className="flex flex-col items-center h-screen bg-black/20 backdrop-blur-sm">
      <h1 className="text-2xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] p-4">
        Play Multiplayer
      </h1>
      <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] w-full relative p-4">
        <div className="absolute inset-0 bg-black/40 border-y-2 border-black" />
        <div className="flex flex-col w-fit min-w-xl justify-center z-1">
          <p className="text-xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] text-center">
            Scanning for games on your local network
          </p>
          <Spinner className="p-0 !text-[#aaaaaa]" />
        </div>
      </div>
      <span className="p-4 mt-auto w-full max-w-3xl grid grid-cols-4 gap-2">
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
