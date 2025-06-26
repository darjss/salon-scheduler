import { View, ViewProps } from "react-native";
import React from "react";
import clsx from "clsx";

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <View className={clsx("px-4", className)} {...props}>
      {children}
    </View>
  );
};
