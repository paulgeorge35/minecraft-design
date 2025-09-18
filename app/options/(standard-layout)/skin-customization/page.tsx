import { Fragment } from "react";
import { Cape, Hat, Jacket, MainHand, Pant, Sleeve } from "./_components";

export default function SkinCustomization() {
  return (
    <Fragment>
      <h1 className="text-2xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] p-4">
        Skin Customization
      </h1>
      <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] w-full relative p-4">
        <div className="absolute inset-0 bg-black/40 border-y-2 border-black" />
        <div className="flex flex-col gap-12 w-fit justify-center">
          <div className="grid grid-cols-2 gap-4">
            <Cape />
            <Jacket />
            <Sleeve side="left" />
            <Sleeve side="right" />
            <Pant side="left" />
            <Pant side="right" />
            <Hat />
            <MainHand />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
