"use client";

import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export type ResourcePack = "prompt" | "enabled" | "disabled";

export type Server = {
  id: string;
  name: string;
  description?: string;
  address: string;
  slots: number;
  ping: number;
  resourcePacks: ResourcePack;
  slotsUsed?: number;
};

type ServerContextType = {
  servers: Server[];
  addServer: (
    server: Omit<Server, "id" | "slots" | "ping" | "slotsUsed">,
  ) => void;
  removeServer: (id: string) => void;
  updateServer: (
    id: string,
    data: Omit<Server, "id" | "slots" | "ping" | "slotsUsed">,
  ) => void;
  getServer: (id: string) => Server | undefined;
  getServers: () => Server[];
};

export const ServerContext = createContext<ServerContextType>({
  servers: [],
  addServer: () => {},
  removeServer: () => {},
  updateServer: () => {},
  getServer: () => undefined,
  getServers: () => [],
});

const slotsValues = [10, 20, 30, 50, 100];
const pingValues = [15, 19, 35, 41, 55];
const descriptions = [
  "A random server",
  "A server with a description",
  "A server with a long description",
  "A server with a very long description",
  "A server with an extremely long description",
];

export const ServerProvider = ({ children }: { children: React.ReactNode }) => {
  const [servers, setServers] = useState<Server[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addServer = (
    server: Omit<Server, "id" | "slots" | "ping" | "slotsUsed">,
  ) => {
    setServers([
      ...servers,
      {
        id: uuid(),
        ...server,
        description:
          descriptions[Math.floor(Math.random() * (descriptions.length - 1))],
        slots:
          slotsValues[Math.floor(Math.random() * (slotsValues.length - 1))],
        ping: pingValues[Math.floor(Math.random() * (pingValues.length - 1))],
      },
    ]);
  };

  const removeServer = (id: string) => {
    setServers(servers.filter((server) => server.id !== id));
  };

  const updateServer = (
    id: string,
    data: Omit<Server, "id" | "slots" | "ping" | "slotsUsed">,
  ) => {
    setServers(
      servers.map((server) =>
        server.id === id ? { ...server, ...data } : server,
      ),
    );
  };

  const getServer = (id: string) => {
    return servers.find((server) => server.id === id);
  };

  const getServers = () => {
    return servers.map((server) => ({
      ...server,
      slotsUsed: Math.floor(Math.random() * server.slots),
    }));
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      try {
        const storedServers = window.localStorage.getItem("minecraft-servers");
        if (storedServers) {
          setServers(JSON.parse(storedServers));
        }
      } catch (error) {
        console.warn("Failed to load servers from localStorage:", error);
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
          "minecraft-servers",
          JSON.stringify(servers),
        );
      } catch (error) {
        console.warn("Failed to save servers to localStorage:", error);
      }
    }
  }, [servers, isLoaded]);

  return (
    <ServerContext.Provider
      value={{
        servers,
        addServer,
        removeServer,
        updateServer,
        getServer,
        getServers,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};
