import { Container } from "@/components/shared/Container";
import { Link, Stack } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <SafeAreaView>
        <Container>
          <View className="flex-1 justify-center items-center px-6">
            <Text className="text-6xl mb-4">🤔</Text>

            <Text className="text-2xl font-bold text-foreground mb-2 text-center">
              Page Not Found
            </Text>

            <Text className="text-base text-muted-foreground text-center mb-8 max-w-xs">
              Sorry, the page you’re looking for doesn’t exist or has been
              moved.
            </Text>

            <Link href="/auth/login" asChild>
              <Pressable className="bg-primary px-6 py-3 rounded-lg">
                <Text className="text-white font-medium text-base">
                  Go Back Home
                </Text>
              </Pressable>
            </Link>
          </View>
        </Container>
      </SafeAreaView>
    </>
  );
}
