import { ConnectForm } from "./_components/connect-form";

export default function DirectConnection() {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      <h1 className="p-4 font-minecraft text-2xl text-[#f9f9f9] text-shadow-[2px_2px_0_#3f3f3f]">
        Direct Connection
      </h1>
      <ConnectForm />
    </div>
  );
}
