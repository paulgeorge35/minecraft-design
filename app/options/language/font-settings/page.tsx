import { DoneButton } from "@/app/_components/done-button";
import { ForceUnicode, JapaneseGlyphs } from "./_components";

export default function FontSettingsPage() {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Font Settings
      </h1>
      <div className="relative flex min-h-0 w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="debug flex w-3xl flex-col justify-center overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 overflow-y-auto p-4">
            <ForceUnicode />
            <JapaneseGlyphs />
          </div>
        </div>
      </div>
      <span className="mt-auto grid w-full max-w-3xl p-4">
        <DoneButton />
      </span>
    </div>
  );
}
