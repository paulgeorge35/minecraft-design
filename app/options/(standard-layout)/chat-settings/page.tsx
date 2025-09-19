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
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Chat Settings
      </h1>
      <div className="relative flex min-h-0 w-full grow flex-col items-center gap-4 border-[#3f3f3f] border-y-2">
        <div className="absolute inset-0 border-black border-y-2 bg-black/40" />
        <div className="flex w-fit min-w-xl flex-col justify-center overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 overflow-y-auto p-4">
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
