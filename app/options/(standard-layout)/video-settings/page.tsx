import { Fragment } from "react";
import {
  AttackIndicator,
  AutosaveIndicator,
  BiomeBlend,
  Brightness,
  ChunkBuilder,
  CloudDistance,
  Clouds,
  DistortionEffects,
  EntityDistance,
  EntityShadows,
  FovEffects,
  Fullscreen,
  GlintSpeed,
  GlintStrength,
  Graphics,
  GuiScale,
  MaxFramerate,
  MenuBlur,
  MinmapLevels,
  Particles,
  ReduceFpsWhen,
  RenderDistance,
  Resolution,
  SimulationDistance,
  SmoothLightning,
  ViewBobbing,
  Vsync,
} from "./_components";

export default function VideoSettings() {
  return (
    <Fragment>
      <h1 className="text-2xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] p-4">
        Video Settings
      </h1>
      <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] w-full relative min-h-0">
        <div className="absolute inset-0 bg-black/40 border-y-2 border-black" />
        <div className="flex flex-col w-fit min-w-xl justify-center overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2  overflow-y-auto p-4">
            <Resolution className="col-span-2" />
            <BiomeBlend className="col-span-2" />
            <Graphics />
            <RenderDistance />
            <ChunkBuilder />
            <SimulationDistance />
            <SmoothLightning />
            <MaxFramerate />
            <Vsync />
            <ReduceFpsWhen />
            <GuiScale />
            <AttackIndicator />
            <Brightness />
            <Clouds />
            <Fullscreen />
            <Particles />
            <MinmapLevels />
            <EntityShadows />
            <DistortionEffects />
            <EntityDistance />
            <FovEffects />
            <AutosaveIndicator />
            <GlintSpeed />
            <GlintStrength />
            <MenuBlur />
            <ViewBobbing />
            <CloudDistance />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
