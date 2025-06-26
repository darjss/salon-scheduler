import React, { createContext, useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import { getStoredUser, storeUser, clearStoredUser } from "@/utils/storage";

export type UserRole = "customer" | "staff";

export interface User {
  id: string;
  role: UserRole;
  username: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (username: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on app launch
    const initializeAuth = async () => {
      try {
        const storedUser = await getStoredUser();
        if (storedUser) {
          setUser(storedUser);
          // Redirect to appropriate screen based on role
          if (storedUser.role === "customer") {
            router.replace("/(customer)");
          } else if (storedUser.role === "staff") {
            router.replace("/(staff)");
          }
        } else {
          router.replace("/(auth)/splash");
        }
      } catch (error) {
        console.error("Failed to initialize auth:", error);
        router.replace("/(auth)/splash");
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (username: string): Promise<boolean> => {
    try {
      let role: UserRole;

      // Static login logic
      if (username === "1") {
        role = "customer";
      } else if (username === "2") {
        role = "staff";
      } else {
        return false; // Invalid credentials
      }

      const newUser: User = {
        id: Date.now().toString(),
        role,
        username: username === "1" ? "Customer User" : "Staff Member",
      };

      await storeUser(newUser);
      setUser(newUser);

      // Navigate to appropriate screen
      if (role === "customer") {
        router.replace("/(customer)");
      } else {
        router.replace("/(staff)");
      }

      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await clearStoredUser();
      setUser(null);
      router.replace("/(auth)/splash");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
