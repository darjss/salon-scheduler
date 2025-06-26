import React from "react";
import { View, Text } from "react-native";

interface HeaderProps {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}

export const Header = ({ title, subtitle, right }: HeaderProps) => {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <View>
        <Text className="text-2xl font-bold text-foreground">{title}</Text>
        {subtitle && (
          <Text className="text-sm text-muted-foreground mt-1">{subtitle}</Text>
        )}
      </View>

      {right && <View>{right}</View>}
    </View>
  );
};
