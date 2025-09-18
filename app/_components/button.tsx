import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Tooltip } from "./tooltip";

export const buttonVariants = cva(
  "px-4 py-1 h-[50px] flex items-center justify-center relative group border-3 border-[#080808] bg-[#6e6e6e] text-shadow-[2px_2px_0_#3f3f3f] text-nowrap hover:border-[#f9f9f9] focus:border-[#f9f9f9] hover:cursor-pointer focus:outline-none font-minecraft text-2xl text-[#f9f9f9] disabled:pointer-events-none bg-[url('/stone-texture.png')] bg-repeat bg-[length:48px_48px] before:content-[''] before:absolute before:inset-0 before:border-l-3 before:border-t-3 before:border-[#aaaaaa] after:content-[''] after:absolute after:inset-0 after:border-r-3 after:border-b-3 after:border-black/20"
);
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  tooltip?: string;
}

export const Button = ({
  children,
  className,
  tooltip,
  ...props
}: ButtonProps) => {
  const buttonComponent = (
    <button {...props} className={cn("", buttonVariants({ className }))}>
      <div className="absolute inset-0 bg-black/50 hidden group-disabled:block" />
      {children}
    </button>
  );

  return tooltip ? (
    <Tooltip content={tooltip}>{buttonComponent}</Tooltip>
  ) : (
    buttonComponent
  );
};
