"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

interface LinkButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const LinkButton = ({ children, className, href }: LinkButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};
