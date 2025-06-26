import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import React from "react";
import clsx from "clsx";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  textClassName?: string;
}

export const Button = ({
  title,
  className,
  textClassName,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={clsx("bg-black py-3 rounded-md", className)}
      {...props}
    >
      <Text
        className={clsx("text-white text-center font-medium", textClassName)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
