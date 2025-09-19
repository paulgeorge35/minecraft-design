import Link from "next/link";
import { buttonVariants } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import { Spinner } from "@/app/_components/spinner";

export default function Language() {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Language
      </h1>
      <div className="relative flex w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2 p-4">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-fit min-w-xl flex-col justify-center gap-12">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="col-span-2">
              <Spinner />
            </div>
          </div>
        </div>
      </div>
      <span className="mt-auto grid w-full max-w-3xl grid-cols-2 gap-4 p-4">
        <p className="col-span-2 w-full text-center font-minecraft text-[#aaaaaa] text-shadow-[2px_2px_0_#080808] text-xl">
          (Language translations may not be 100% accurate)
        </p>
        <Link
          href="/options/language/font-settings"
          className={buttonVariants()}
        >
          Font Settings...
        </Link>
        <DoneButton />
      </span>
    </div>
  );
}
