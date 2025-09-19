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
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Video Settings
      </h1>
      <div className="relative flex min-h-0 w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-3xl flex-col justify-center overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 overflow-y-auto p-4">
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
