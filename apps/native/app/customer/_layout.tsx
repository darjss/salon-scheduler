import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/lib/context/AuthContext";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { View } from "react-native";

export default function CustomerLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <LoadingSpinner size="large" />
      </View>
    );
  }

  if (!user || user.role !== "customer") {
    return <Redirect href="/(auth)/splash" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="booking/[id]"
        options={{ headerShown: true, title: "Booking Details" }}
      />
    </Stack>
  );
}
