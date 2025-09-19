import { Fragment } from "react";
import {
  Ambient,
  Blocks,
  Device,
  DirectionalAudio,
  FriendlyMobs,
  HostileMobs,
  Jukebox,
  MasterVolume,
  Music,
  MusicFrequency,
  MusicToast,
  Players,
  Subtitles,
  UI,
  Voice,
  Weather,
} from "./_components";

export default function MusicAndSounds() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Music & Sounds
      </h1>
      <div className="relative flex min-h-0 w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-fit min-w-xl flex-col justify-center overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 overflow-y-auto p-4">
            <MasterVolume className="col-span-2" />
            <Music />
            <Jukebox />
            <Weather />
            <Blocks />
            <HostileMobs />
            <FriendlyMobs />
            <Players />
            <Ambient />
            <Voice />
            <UI />
            <Device className="col-span-2" />
            <Subtitles />
            <DirectionalAudio />
            <MusicFrequency />
            <MusicToast />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
