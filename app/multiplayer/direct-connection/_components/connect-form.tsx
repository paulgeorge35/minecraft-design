"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import { Input } from "@/app/_components/input";

export const ConnectForm = () => {
  const [serverAddress, setServerAddress] = useState("");
  const router = useRouter();
  const handleJoinServer = () => {
    router.replace("/multiplayer/connecting");
  };

  return (
    <div className="relative flex h-[50dvh] min-h-[500px] w-full flex-col items-center justify-end gap-24 p-4">
      <div className="flex w-fit min-w-lg flex-col justify-center">
        <Input
          label="Server Address"
          value={serverAddress}
          onChange={(e) => setServerAddress(e.target.value)}
        />
      </div>
      <div className="flex w-fit min-w-lg flex-col justify-center gap-4">
        <Button disabled={serverAddress === ""} onClick={handleJoinServer}>
          Join Server
        </Button>
        <DoneButton label="Cancel" />
      </div>
    </div>
  );
};
