import { Button, buttonVariants } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import Link from "next/link";
import { Fragment } from "react";

export default function CreditsAndAttribution() {
  return (
    <Fragment>
      <h1 className="text-2xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] p-4">
        Credits & Attribution
      </h1>
      <div className="flex flex-col items-center gap-4 grow w-full p-4 pt-12">
        <div className="flex flex-col gap-4 w-fit min-w-xl justify-center h-full">
          <Button>Credits</Button>
          <Link
            href="https://aka.ms/MinecraftJavaAttribution"
            className={buttonVariants()}
          >
            Attribution
          </Link>
          <Link
            href="https://aka.ms/MinecraftJavaLicenses"
            className={buttonVariants()}
          >
            Licenses
          </Link>
          <DoneButton className="mt-auto" />
        </div>
      </div>
    </Fragment>
  );
}
