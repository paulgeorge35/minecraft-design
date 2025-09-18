"use client";

import { Button } from "@/app/_components/button";
import {
  Particles as ParticlesType,
  SettingsContext,
} from "@/app/_components/settings-context";
import { use } from "react";

export const Particles = () => {
  const particles: ParticlesType[] = ["all", "decreased", "minimal"];
  const particlesLabels: Record<ParticlesType, string> = {
    all: "All",
    decreased: "Decreased",
    minimal: "Minimal",
  };
  const { settings, setSettings } = use(SettingsContext);
  return (
    <Button
      onClick={() => {
        setSettings({
          ...settings,
          video: {
            ...settings.video,
            particles:
              particles[
                (particles.indexOf(settings.video.particles) + 1) %
                  particles.length
              ],
          },
        });
      }}
    >
      Particles: {particlesLabels[settings.video.particles]}
    </Button>
  );
};
