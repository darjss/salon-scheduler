import { View, ViewProps } from "react-native";
import React from "react";
import clsx from "clsx";

interface CardProps extends ViewProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <View
      className={clsx(
        "bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-4",
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
};
