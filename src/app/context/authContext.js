"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();

  const [token, setToken] = useState();

  // Load token on first render
  useEffect(() => {
    const saved = localStorage.getItem("token");
    if (saved) setToken(saved);
  }, []);

  // Login function
  const login = (tokenValue) => {
    localStorage.setItem("token", tokenValue);
    setToken(tokenValue);      // <-- re-render immediately
    router.push("/account-details"); // <-- redirect works without refresh
  };

  // Register function
const register = (tokenValue) => {
  localStorage.setItem("token", tokenValue);
  setToken(tokenValue);         // triggers UI update instantly
  router.push("/account-details"); // redirect after successful register
};

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken();            // <-- re-render immediately
    router.push("/login");     // <-- redirect works instantly
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}