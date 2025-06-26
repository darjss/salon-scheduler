import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { Container } from "@/components/shared/Container";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { useAuth } from "@/lib/context/AuthContext";

export default function SplashScreen() {
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const timer = setTimeout(() => {
        router.replace("/auth/login");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, isAuthenticated]);

  return (
    <Container>
      <View className="flex-1 justify-center items-center bg-primary px-6">
        <View className="items-center">
          <Text className="text-4xl font-bold text-white mb-2 text-center">
            💅 Beauty Salon
          </Text>
          <Text className="text-lg text-primary-foreground/80 text-center mb-8">
            Your beauty, our passion
          </Text>
          <LoadingSpinner size="large" color="white" />
        </View>
      </View>
    </Container>
  );
}
