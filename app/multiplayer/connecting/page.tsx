import { DoneButton } from "@/app/_components/done-button";

export default function Connecting() {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] opacity-0">
        Direct Connection
      </h1>
      <div className="relative flex h-[50dvh] min-h-[500px] w-full flex-col items-center justify-end gap-24 p-4">
        <div className="flex w-fit min-w-lg flex-col justify-center">
          <p className="text-center font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0px_#3f3f3f]">
            Connecting to the server...
          </p>
        </div>
        <div className="flex w-fit min-w-lg flex-col justify-center gap-4">
          <DoneButton label="Cancel" />
        </div>
      </div>
    </div>
  );
}
