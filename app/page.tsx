import { cn } from "@/lib/utils";
import accessibilityIcon from "@/public/accessibility.png";
import header from "@/public/header.png";
import languageIcon from "@/public/languages.png";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./_components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Image src={header} alt="header" className="h-100 w-auto" />
      <div className="grid grid-cols-[50px_1fr_1fr_50px] gap-4 max-w-xl w-full justify-center">
        <Button className="col-start-2 col-span-2">Singleplayer</Button>
        <Link
          href="/multiplayer"
          className={cn("col-start-2 col-span-2", buttonVariants())}
        >
          Multiplayer
        </Link>
        <Button className="col-start-2 col-span-2">Minecraft Realms</Button>
        <div className="grid grid-cols-subgrid col-span-full gap-4 mt-8">
          <Link
            href="/options/language"
            className={cn("!p-2", buttonVariants())}
          >
            <Image src={languageIcon} alt="language" />
          </Link>
          <Link href="/options" className="w-full grid">
            <Button>Options...</Button>
          </Link>
          <Button>Quit Game</Button>
          <Link
            href="/options/accessibility-settings"
            className={cn("!p-2", buttonVariants())}
          >
            <Image src={accessibilityIcon} alt="accessibility" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-2 right-2 flex justify-between font-minecraft text-lg text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        <p>Minecraft 1.21.8 (Modded)</p>
        <p>Copyright Mojang AB. Do not distribute!</p>
      </div>
    </div>
  );
}
