import { useAuth } from "@/lib/context/AuthContext";
import { router } from "expo-router";

export function useLogin() {
  const { setRole } = useAuth();

  const login = (username: string) => {
    if (username === "1") {
      setRole("customer");
      router.replace("/customer/(tabs)");
    } else if (username === "2") {
      setRole("staff");
      router.replace("/staff/(tabs)");
    } else {
      throw new Error("Хэрэглэгчийн нэр буруу байна.");
    }
  };

  return { login };
}

export function useLogout() {
  const { setRole } = useAuth();

  const logout = () => {
    setRole(null);
    router.replace("/auth/login");
  };

  return { logout };
}
