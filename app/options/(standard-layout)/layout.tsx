import { DoneButton } from "../../_components/done-button";

export default function OptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-screen bg-black/20 backdrop-blur-sm">
      {children}
      <span className="p-4 mt-auto w-full max-w-3xl grid">
        <DoneButton />
      </span>
    </div>
  );
}
