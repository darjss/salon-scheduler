import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import { queryClient } from "@/utils/trpc";
import React, { useRef } from "react";
import { Platform } from "react-native";
import { AuthProvider } from "@/lib/context/AuthContext";

const APP_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
    card: "#f9fafb",
    text: "#111827",
    primary: "#6366f1",
    border: "#e5e7eb",
    notification: "#facc15",
  },
};

export const unstable_settings = {
  initialRouteName: "customer",
};

export default function RootLayout() {
  const hasMounted = useRef(false);

  React.useLayoutEffect(() => {
    if (hasMounted.current) return;

    if (Platform.OS === "web") {
      document.documentElement.classList.add("bg-background");
    }

    hasMounted.current = true;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider value={APP_THEME}>
          <StatusBar style="dark" />
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="auth" />
              <Stack.Screen name="customer" />
              <Stack.Screen name="staff" />
              <Stack.Screen name="common" />
            </Stack>
          </GestureHandlerRootView>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
