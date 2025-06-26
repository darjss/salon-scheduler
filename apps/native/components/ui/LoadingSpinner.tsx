import { ActivityIndicator, View } from "react-native";
import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "large";
  color?: string;
  centered?: boolean;
}

export const LoadingSpinner = ({
  size = "large",
  color = "#000000",
  centered = false,
}: LoadingSpinnerProps) => {
  return (
    <View className={centered ? "flex-1 justify-center items-center" : ""}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
