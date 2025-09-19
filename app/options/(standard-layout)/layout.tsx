import { DoneButton } from "../../_components/done-button";

export default function OptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      {children}
      <span className="mt-auto grid w-full max-w-3xl py-4">
        <DoneButton />
      </span>
    </div>
  );
}
