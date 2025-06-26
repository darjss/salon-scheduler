import React from "react";
import {
  LucideIcon,
  Home,
  Calendar,
  Heart,
  Bell,
  User,
} from "lucide-react-native";

type IconName = "home" | "calendar" | "heart" | "bell" | "user";

interface TabBarIconProps {
  name: IconName;
  color: string;
}

const iconMap: Record<IconName, LucideIcon> = {
  home: Home,
  calendar: Calendar,
  heart: Heart,
  bell: Bell,
  user: User,
};

export const TabBarIcon = ({ name, color }: TabBarIconProps) => {
  const Icon = iconMap[name];

  return <Icon color={color} size={22} strokeWidth={2} />;
};
