import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderProps {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}

export const Header = ({ title, subtitle, right }: HeaderProps) => {
  return (
    <View style={styles.headerRow}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {right && <View>{right}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222", // or your theme color
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280", // muted color
    marginTop: 4,
  },
});
