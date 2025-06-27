import React, { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { Container } from "@/components/shared/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/lib/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username.trim()) {
      Alert.alert("Error", "Please enter a username");
      return;
    }

    setIsLoading(true);
    try {
      const success = await login(username.trim());
      if (!success) {
        Alert.alert(
          "Login Failed",
          'Invalid credentials. Use "1" for customer or "2" for staff.'
        );
      } else {
        if (username.trim() === "1") {
          router.replace("/customer/(tabs)");
        } else if (username.trim() === "2") {
          router.replace("/staff/(tabs)");
        }
      }
    } catch (error) {
      Alert.alert("Error", "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <View style={styles.wrapper}>
          <View style={styles.heading}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>
          </View>

          <Card style={styles.card}>
            <View style={styles.form}>
              <View>
                <Text style={styles.label}>Username</Text>
                <Input
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Enter 1 for customer, 2 for staff"
                  autoCapitalize="none"
                  editable={!isLoading}
                />
              </View>

              <Button
                onPress={handleLogin}
                disabled={isLoading}
                loading={isLoading}
                style={styles.button}
                title="Sign In"
              />
            </View>
          </Card>

          <View style={styles.demoBox}>
            <Text style={styles.demoText}>Demo Credentials:</Text>
            <Text style={[styles.demoText, { marginTop: 4 }]}>
              Customer: "1" | Staff: "2"
            </Text>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 64,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
  },
  heading: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
  },
  card: {
    padding: 24,
    marginBottom: 24,
  },
  form: {
    gap: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 8,
  },
  button: {
    marginTop: 24,
  },
  demoBox: {
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    padding: 16,
  },
  demoText: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
});
