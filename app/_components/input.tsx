import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <p className="font-minecraft text-[#aaaaaa] text-shadow-[2px_2px_1px_#3f3f3f] text-xl">
          {label}
        </p>
      )}
      <input
        spellCheck={false}
        className={cn(
          "h-12 rounded-none border-3 border-[#aaaaaa] bg-black p-2 font-minecraft text-[#f9f9f9] text-xl focus:border-[#f9f9f9] focus:outline-none",
        )}
        {...props}
      />
    </div>
  );
};
