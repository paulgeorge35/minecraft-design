import Image from "next/image";
import { cn } from "@/lib/utils";
import accessibilityIcon from "@/public/accessibility.webp";
import header from "@/public/header.webp";
import languageIcon from "@/public/languages.webp";
import { Button } from "./_components/button";
import { LinkButton } from "./_components/link-button";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center">
      <Image src={header} alt="header" className="h-100 w-auto" />
      <div className="grid w-full max-w-xl grid-cols-[50px_1fr_1fr_50px] justify-center gap-4">
        <Button className="col-span-2 col-start-2">Singleplayer</Button>
        <LinkButton
          href="/multiplayer"
          className={cn("col-span-2 col-start-2")}
        >
          Multiplayer
        </LinkButton>
        <Button className="col-span-2 col-start-2">Minecraft Realms</Button>
        <div className="col-span-full mt-8 grid grid-cols-subgrid gap-4">
          <LinkButton
            href="/options/language"
            className={cn("[&_.button-text]:p-0")}
          >
            <Image src={languageIcon} alt="language" className="size-8" />
          </LinkButton>
          <LinkButton href="/options" className="grid w-full">
            Options...
          </LinkButton>
          <Button>Quit Game</Button>
          <LinkButton
            href="/options/accessibility-settings"
            className={cn("[&_.button-text]:p-0")}
          >
            <Image
              src={accessibilityIcon}
              alt="accessibility"
              className="size-8"
            />
          </LinkButton>
        </div>
      </div>
      <div className="absolute right-2 bottom-0 left-2 flex justify-between font-minecraft text-[#f9f9f9] text-lg text-shadow-[2px_2px_0_#3f3f3f]">
        <p>Minecraft 1.21.8 (Modded)</p>
        <p>Copyright Mojang AB. Do not distribute!</p>
      </div>
    </div>
  );
}
