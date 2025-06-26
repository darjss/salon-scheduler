import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Container } from "@/components/shared/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/lib/context/AuthContext";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

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
      }
    } catch (error) {
      Alert.alert("Error", "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <View className="flex-1 justify-center px-6 bg-background">
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </Text>
          <Text className="text-muted-foreground text-center">
            Sign in to your account
          </Text>
        </View>

        <Card className="p-6 mb-6">
          <View className="space-y-4">
            <View>
              <Text className="text-sm font-medium text-foreground mb-2">
                Username
              </Text>
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
              className="mt-6"
            >
              Sign In
            </Button>
          </View>
        </Card>

        <View className="bg-muted/50 rounded-lg p-4">
          <Text className="text-sm text-muted-foreground text-center">
            Demo Credentials:
          </Text>
          <Text className="text-sm text-muted-foreground text-center mt-1">
            Customer: "1" | Staff: "2"
          </Text>
        </View>
      </View>
    </Container>
  );
}
