import { ActivityIndicator, View, StyleSheet } from "react-native";
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
    <View style={centered ? styles.centered : undefined}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
