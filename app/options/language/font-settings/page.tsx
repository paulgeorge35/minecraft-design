import { DoneButton } from "@/app/_components/done-button";
import { ForceUnicode, JapaneseGlyphs } from "./_components";

export default function FontSettingsPage() {
  return (
    <div className="flex flex-col items-center h-screen bg-black/20 backdrop-blur-sm">
      <h1 className="text-2xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] p-4">
        Font Settings
      </h1>
      <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] w-full relative min-h-0">
        <div className="absolute inset-0 bg-black/40 border-y-2 border-black" />
        <div className="flex flex-col w-fit min-w-xl justify-center overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2  overflow-y-auto p-4">
            <ForceUnicode />
            <JapaneseGlyphs />
          </div>
        </div>
      </div>
      <span className="p-4 mt-auto w-full max-w-3xl grid">
        <DoneButton />
      </span>
    </div>
  );
}
