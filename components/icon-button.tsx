"use client";
import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full flex justify-center items-center bg-white text-black border shadow-md p-2 hover:scale-110 transition hover:bg-white",
        className
      )}
      size="icon"
    >
      {icon}
    </Button>
  );
};

export default IconButton;
