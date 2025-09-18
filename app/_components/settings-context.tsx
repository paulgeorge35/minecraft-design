"use client";

import { createContext, useEffect, useState } from "react";

type MainHand = "left" | "right";
export type MusicFrequency = "default" | "frequent" | "constant";
export type Graphics = "fast" | "fancy" | "fabulous";
export type ChunkBuilder = "threaded" | "semi-blocking" | "blocking";
export type ReduceFpsWhen = "afk" | "minimized";
export type AttackIndicator = "crosshair" | "hotbar" | "off";
export type Clouds = "fast" | "fancy" | "off";
export type Particles = "all" | "decreased" | "minimal";
export type Toggle = "hold" | "toggle";
export type ChatVisibility = "shown" | "hidden" | "commands-only";

type SettingsContextType = {
  fov: number;
  online: {
    realmsNewsInvites: boolean;
    allowServerListings: boolean;
  };
  skinCustomization: {
    cape: boolean;
    jacket: boolean;
    sleeve: {
      left: boolean;
      right: boolean;
    };
    pants: {
      left: boolean;
      right: boolean;
    };
    hat: boolean;
    mainHand: MainHand;
  };
  musicAndSounds: {
    masterVolume: number;
    music: number;
    jukebox: number;
    weather: number;
    blocks: number;
    hostileMobs: number;
    friendlyMobs: number;
    players: number;
    ambient: number;
    voice: number;
    ui: number;
    device: string;
    subtitles: boolean;
    directionalAudio: boolean;
    musicFrequency: MusicFrequency;
    musicToast: boolean;
  };
  video: {
    resolution: number;
    biomeBlend: number;
    graphics: Graphics;
    renderDistance: number;
    chunkBuilder: ChunkBuilder;
    simulationDistance: number;
    smoothLighting: boolean;
    maxFramerate: number;
    vsync: boolean;
    reduceFpsWhen: ReduceFpsWhen;
    guiScale: number;
    attackIndicator: AttackIndicator;
    brightness: number;
    clouds: Clouds;
    fullScreen: boolean;
    particles: Particles;
    minmapLevels: number;
    entityShadow: boolean;
    distortionEffects: number;
    entityDistance: number;
    fovEffects: number;
    autosaveIndicator: boolean;
    glintSpeed: number;
    glintStrength: number;
    menuBackgroundBlur: number;
    viewBobbing: boolean;
    cloudDistance: number;
  };
  controls: {
    sneak: Toggle;
    sprint: Toggle;
    autoJump: boolean;
    operatorItemsTab: boolean;
    mouse: {
      sensitivity: number;
      invert: boolean;
      scrollSensitivity: number;
      discreteScroll: boolean;
      touchscreenMode: boolean;
    };
  };
  chat: {
    chat: ChatVisibility;
    colors: boolean;
    webLinks: boolean;
    promptLinks: boolean;
    chatTextOpacity: number;
    textBackgroundOpacity: number;
    chatTextSize: number;
    lineSpacing: number;
    chatDelay: number;
    width: number;
    focusedHeight: number;
    unfocusedHeight: number;
    narrator: boolean;
    commandSuggestions: boolean;
    hideMatchedNames: boolean;
    reducedDebugInfo: boolean;
    onlyShowSecureChat: boolean;
  };
  language: {
    font: {
      forceUnicode: boolean;
      japaneseGlyphs: boolean;
    };
  };
};

type SettingsContextProviderType = {
  settings: SettingsContextType;
  setSettings: (settings: SettingsContextType) => void;
  isLoaded: boolean;
};

const defaultSettings: SettingsContextType = {
  fov: 70,
  online: {
    realmsNewsInvites: true,
    allowServerListings: true,
  },
  skinCustomization: {
    cape: true,
    jacket: true,
    sleeve: { left: true, right: true },
    pants: { left: true, right: true },
    hat: true,
    mainHand: "right",
  },
  musicAndSounds: {
    masterVolume: 100,
    music: 100,
    jukebox: 100,
    weather: 100,
    blocks: 100,
    hostileMobs: 100,
    friendlyMobs: 100,
    players: 100,
    ambient: 100,
    voice: 100,
    ui: 100,
    device: "System Default",
    subtitles: true,
    directionalAudio: true,
    musicFrequency: "default",
    musicToast: true,
  },
  video: {
    resolution: 1,
    biomeBlend: 2,
    graphics: "fast",
    renderDistance: 10,
    chunkBuilder: "threaded",
    simulationDistance: 10,
    smoothLighting: true,
    maxFramerate: 60,
    vsync: true,
    reduceFpsWhen: "afk",
    guiScale: 1,
    attackIndicator: "crosshair",
    brightness: 100,
    clouds: "fast",
    fullScreen: true,
    particles: "all",
    minmapLevels: 4,
    entityShadow: true,
    distortionEffects: 100,
    entityDistance: 10,
    fovEffects: 100,
    autosaveIndicator: true,
    glintSpeed: 100,
    glintStrength: 100,
    menuBackgroundBlur: 5,
    viewBobbing: true,
    cloudDistance: 10,
  },
  controls: {
    sneak: "hold",
    sprint: "hold",
    autoJump: true,
    operatorItemsTab: true,
    mouse: {
      sensitivity: 100,
      invert: false,
      scrollSensitivity: 1.25,
      discreteScroll: false,
      touchscreenMode: false,
    },
  },
  chat: {
    chat: "shown",
    colors: true,
    webLinks: true,
    promptLinks: true,
    chatTextOpacity: 100,
    textBackgroundOpacity: 50,
    chatTextSize: 100,
    lineSpacing: 0,
    chatDelay: 0,
    width: 320,
    focusedHeight: 180,
    unfocusedHeight: 90,
    narrator: false,
    commandSuggestions: true,
    hideMatchedNames: true,
    reducedDebugInfo: false,
    onlyShowSecureChat: false,
  },
  language: {
    font: {
      forceUnicode: false,
      japaneseGlyphs: false,
    },
  },
};

export const SettingsContext = createContext<SettingsContextProviderType>({
  settings: defaultSettings,
  setSettings: () => {},
  isLoaded: false,
});

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useState(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      try {
        const storedSettings =
          window.localStorage.getItem("minecraft-settings");
        if (storedSettings) {
          setSettings(JSON.parse(storedSettings));
        }
      } catch (error) {
        console.warn("Failed to load settings from localStorage:", error);
      } finally {
        setIsLoaded(true);
      }
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined" &&
      isLoaded
    ) {
      try {
        window.localStorage.setItem(
          "minecraft-settings",
          JSON.stringify(settings)
        );
      } catch (error) {
        console.warn("Failed to save settings to localStorage:", error);
      }
    }
  }, [settings, isLoaded]);

  return (
    <SettingsContext value={{ settings, setSettings, isLoaded }}>
      {children}
    </SettingsContext>
  );
};
