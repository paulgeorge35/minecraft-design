import Link from "next/link";
import { Fragment } from "react";
import { Button, buttonVariants } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";

export default function CreditsAndAttribution() {
  return (
    <Fragment>
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Credits & Attribution
      </h1>
      <div className="flex w-full grow flex-col items-center gap-4 p-4 pt-12">
        <div className="flex h-full w-fit min-w-xl flex-col justify-center gap-4">
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
