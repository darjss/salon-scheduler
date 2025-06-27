import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Container } from "@/components/shared/Container";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { useAuth } from "@/lib/context/AuthContext";

export default function SplashScreen() {
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!isLoading && !isAuthenticated) {
      timer = setTimeout(() => {
        router.replace("/auth/login");
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading, isAuthenticated]);

  return (
    <Container>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>💅 Beauty Salon</Text>
          <Text style={styles.subtitle}>Your beauty, our passion</Text>
          <LoadingSpinner size="large" color="white" />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6366f1",
    paddingHorizontal: 24,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginBottom: 32,
  },
});
