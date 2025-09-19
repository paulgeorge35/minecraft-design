import { DoneButton } from "@/app/_components/done-button";
import { LinkButton } from "@/app/_components/link-button";
import { Spinner } from "@/app/_components/spinner";

export default function Language() {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Language
      </h1>
      <div className="relative flex w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2 p-4">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-3xl flex-col justify-center gap-12">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="col-span-2">
              <Spinner />
            </div>
          </div>
        </div>
      </div>
      <span className="mt-auto grid w-3xl grid-cols-2 gap-4 py-4">
        <p className="col-span-2 w-full text-center font-minecraft text-[#aaaaaa] text-shadow-[2px_2px_0_#080808] text-xl">
          (Language translations may not be 100% accurate)
        </p>
        <LinkButton href="/options/language/font-settings">
          Font Settings...
        </LinkButton>
        <DoneButton />
      </span>
    </div>
  );
}
