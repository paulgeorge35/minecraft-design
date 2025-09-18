import { buttonVariants } from "@/app/_components/button";
import { DoneButton } from "@/app/_components/done-button";
import Link from "next/link";

export default function LanguageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-screen bg-black/20 backdrop-blur-sm">
      {children}
      <span className="p-4 mt-auto w-full max-w-3xl grid grid-cols-2 gap-4">
        <p className="col-span-2 font-minecraft text-xl text-[#aaaaaa] text-shadow-[2px_2px_0_#080808] w-full text-center">
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
