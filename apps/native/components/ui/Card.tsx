import { View, ViewProps, StyleSheet } from "react-native";
import React from "react";

interface CardProps extends ViewProps {
  style?: any;
  children: React.ReactNode;
}

export const Card = ({ style, children, ...props }: CardProps) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    padding: 16,
  },
});
