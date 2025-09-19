import { Fragment } from "react";
import { Button } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import { LinkButton } from "@/app/_components/link-button";

export default function CreditsAndAttribution() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Credits & Attribution
      </h1>
      <div className="flex w-full grow flex-col items-center gap-4 p-4 pt-12">
        <div className="flex h-full w-3xl flex-col items-center justify-center gap-4">
          <Button className="w-[300px]">Credits</Button>
          <LinkButton
            href="https://aka.ms/MinecraftJavaAttribution"
            className="w-[300px]"
          >
            Attribution
          </LinkButton>
          <LinkButton
            href="https://aka.ms/MinecraftJavaLicenses"
            className="w-[300px]"
          >
            Licenses
          </LinkButton>
          <DoneButton className="mt-auto w-full" />
        </div>
      </div>
    </Fragment>
  );
}
