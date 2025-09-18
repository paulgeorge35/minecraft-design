import { DoneButton } from "./_components/done-button";

export default function NotFound() {
  return (
    <div className="font-minecraft text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f] h-screen flex flex-col items-center justify-center gap-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
      <DoneButton className="w-full" label="Return Home" />
    </div>
  );
}
