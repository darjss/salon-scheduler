import { View, ViewProps } from "react-native";
import React from "react";
import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView className={clsx("px-4", className)} {...props}>
      {children}
    </SafeAreaView>
  );
};
