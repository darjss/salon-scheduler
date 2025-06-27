import { View, ViewProps, StyleSheet } from "react-native";
import React from "react";

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  style?: any;
}

export const Container = ({ children, style, ...props }: ContainerProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
