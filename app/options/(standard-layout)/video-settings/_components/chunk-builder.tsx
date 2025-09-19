"use client";

import { use } from "react";
import { Button } from "@/app/_components/button";
import {
  type ChunkBuilder as ChunkBuilderType,
  SettingsContext,
} from "@/app/_components/settings-context";

export const ChunkBuilder = () => {
  const chunkBuilder: ChunkBuilderType[] = [
    "threaded",
    "semi-blocking",
    "blocking",
  ];
  const chunkBuilderLabels: Record<ChunkBuilderType, string> = {
    threaded: "Threaded",
    "semi-blocking": "Semi Blocking",
    blocking: "Fully Blocking",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            chunkBuilder:
              chunkBuilder[
                (chunkBuilder.indexOf(settings.video.chunkBuilder) + 1) %
                  chunkBuilder.length
              ],
          },
        });
      }}
      tooltip={
        settings.video.chunkBuilder === "threaded"
          ? "Nearby chunks are compiled in parallel threads. This may result in brief visual holes when blocks are destroyed."
          : settings.video.chunkBuilder === "semi-blocking"
            ? "Some actions within a chunk will recompile the chunk immediately. This includes block placing & destroying."
            : "Nearby chunks are always compiled immediately. This may impact game performance when blocks are placed or destroyed."
      }
    >
      Chunk Builder: {chunkBuilderLabels[settings.video.chunkBuilder]}
    </Button>
  );
};
