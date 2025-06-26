import * as SecureStore from "expo-secure-store";
import { User } from "@/lib/context/AuthContext";

const USER_STORAGE_KEY = "user_data";

export async function storeUser(user: User): Promise<void> {
  try {
    await SecureStore.setItemAsync(USER_STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    console.error("Failed to store user:", error);
    throw error;
  }
}

export async function getStoredUser(): Promise<User | null> {
  try {
    const userData = await SecureStore.getItemAsync(USER_STORAGE_KEY);
    if (userData) {
      return JSON.parse(userData) as User;
    }
    return null;
  } catch (error) {
    console.error("Failed to get stored user:", error);
    return null;
  }
}

export async function clearStoredUser(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(USER_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear stored user:", error);
    throw error;
  }
}
