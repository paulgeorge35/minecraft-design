import { Fragment } from "react";
import { DoneButton } from "@/app/_components/done-button";
import { LinkButton } from "@/app/_components/link-button";
import {
  ChatDelay,
  ChatTextOpacity,
  LineSpacing,
  TextBackgroundOpacity,
} from "../../(standard-layout)/chat-settings/_components";
import {
  AutoJump,
  Sneak,
  Sprint,
} from "../../(standard-layout)/controls/_components";
import { Subtitles } from "../../(standard-layout)/music-and-sounds/_components";
import {
  DistortionEffects,
  FovEffects,
  GlintSpeed,
  GlintStrength,
  MenuBlur,
  ViewBobbing,
} from "../../(standard-layout)/video-settings/_components";
import {
  DamageTilt,
  DarknessPulsing,
  HideLightningFlashes,
  HideSplashTexts,
  HighContrast,
  HighContrastBlockOutlines,
  MonochromeLogo,
  Narrator,
  NarratorHotkey,
  NotificationTime,
  PanoramaScrollSpeed,
  RotateWithMinecarts,
  TextBackground,
} from "./_components";

export default function AccessibilitySettings() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Accessibility Settings
      </h1>
      <div className="relative flex w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2 p-4">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-3xl flex-col justify-center gap-12">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Narrator />
            <Subtitles />
            <HighContrast />
            <AutoJump />
            <MenuBlur />
            <TextBackgroundOpacity />
            <TextBackground />
            <ChatTextOpacity />
            <LineSpacing />
            <ChatDelay />
            <NotificationTime />
            <ViewBobbing />
            <Sneak />
            <Sprint />
            <DistortionEffects />
            <FovEffects />
            <DarknessPulsing />
            <DamageTilt />
            <GlintSpeed />
            <GlintStrength />
            <HideLightningFlashes />
            <MonochromeLogo />
            <PanoramaScrollSpeed />
            <HideSplashTexts />
            <NarratorHotkey />
            <RotateWithMinecarts />
            <HighContrastBlockOutlines />
          </div>
        </div>
      </div>
      <span className="mt-auto grid w-full max-w-3xl grid-cols-2 gap-4 py-4">
        <LinkButton href="https://aka.ms/MinecraftJavaAccessibility">
          Accessibility Guide
        </LinkButton>
        <DoneButton />
      </span>
    </Fragment>
  );
}
