"use client";

import { useRouter } from "next/navigation";
import { use, useMemo, useState } from "react";
import { Button } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import { Input } from "@/app/_components/input";
import {
  type ResourcePack,
  ServerContext,
} from "@/app/_components/servers-context";

export const AddServerForm = () => {
  const [serverName, setServerName] = useState("");
  const [serverAddress, setServerAddress] = useState("");
  const [resourcePacks, setResourcePacks] = useState<ResourcePack>("prompt");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addServer } = use(ServerContext);

  const resourcePackOptions: Record<ResourcePack, string> = {
    prompt: "Prompt",
    enabled: "Enabled",
    disabled: "Disabled",
  };

  const router = useRouter();
  const handleSubmit = () => {
    if (disabled) return;
    setIsSubmitting(true);
    addServer({
      name: serverName,
      address: serverAddress,
      resourcePacks,
    });
    router.replace("/multiplayer");
  };

  const disabled = useMemo(
    () => serverName === "" || serverAddress === "" || isSubmitting,
    [serverName, serverAddress, isSubmitting],
  );

  return (
    <div className="relative flex h-[50dvh] min-h-[500px] w-full flex-col items-center justify-end gap-24 p-4">
      <div className="flex w-fit min-w-lg flex-col justify-center gap-4">
        <Input
          label="Server Name"
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
        />
        <Input
          label="Server Address"
          value={serverAddress}
          onChange={(e) => setServerAddress(e.target.value)}
        />
        <Button
          onClick={() =>
            setResourcePacks(
              resourcePacks === "prompt"
                ? "enabled"
                : resourcePacks === "enabled"
                  ? "disabled"
                  : "prompt",
            )
          }
        >
          Server Resource Packs: {resourcePackOptions[resourcePacks]}
        </Button>
      </div>
      <div className="flex w-fit min-w-lg flex-col justify-center gap-4">
        <Button disabled={disabled} onClick={handleSubmit}>
          Done
        </Button>
        <DoneButton label="Cancel" />
      </div>
    </div>
  );
};
