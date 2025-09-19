"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "./button";

interface LinkButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const LinkButton = ({ children, className, href }: LinkButtonProps) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(href);
  }, [href, router]);

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};
