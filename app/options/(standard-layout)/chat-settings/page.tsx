import { Fragment } from "react";
import {
  Chat,
  ChatDelay,
  ChatTextOpacity,
  ChatTextSize,
  Colors,
  CommandSuggestions,
  FocusedHeight,
  HideMatchedNames,
  LineSpacing,
  Narrator,
  OnlySecureChat,
  PromptLinks,
  ReducedDebugInfo,
  TextBackgroundOpacity,
  UnfocusedHeight,
  WebLinks,
  Width,
} from "./_components";

export default function ChatSettings() {
  return (
    <Fragment>
      <h1 className="text-2xl font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] p-4">
        Chat Settings
      </h1>
      <div className="flex flex-col items-center gap-4 grow border-y-2 border-[#3f3f3f] w-full relative min-h-0">
        <div className="absolute inset-0 bg-black/40 border-y-2 border-black" />
        <div className="flex flex-col w-fit min-w-xl justify-center overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2  overflow-y-auto p-4">
            <Chat />
            <Colors />
            <WebLinks />
            <PromptLinks />
            <ChatTextOpacity />
            <TextBackgroundOpacity />
            <ChatTextSize />
            <LineSpacing />
            <ChatDelay />
            <Width />
            <FocusedHeight />
            <UnfocusedHeight />
            <Narrator />
            <CommandSuggestions />
            <HideMatchedNames />
            <ReducedDebugInfo />
            <OnlySecureChat />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
