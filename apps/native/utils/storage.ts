import * as SecureStore from "expo-secure-store";

export async function storeUser(user: any) {
  await SecureStore.setItemAsync("user", JSON.stringify(user));
}

export async function getStoredUser() {
  const user = await SecureStore.getItemAsync("user");
  return user ? JSON.parse(user) : null;
}

export async function clearStoredUser() {
  await SecureStore.deleteItemAsync("user");
}
