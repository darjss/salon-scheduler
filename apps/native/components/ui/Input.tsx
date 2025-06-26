import { TextInput, TextInputProps } from "react-native";
import React from "react";
import clsx from "clsx";

interface InputProps extends TextInputProps {
  className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <TextInput
      className={clsx(
        "border border-gray-300 rounded-md px-4 py-2 text-base text-black dark:text-white",
        className
      )}
      placeholderTextColor="#9ca3af"
      {...props}
    />
  );
};
