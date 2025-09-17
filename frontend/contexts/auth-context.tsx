"use client";

import React, { useContext, createContext, useState, useEffect } from "react";
import { AuthContextType, UserType } from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");
    if (token) {
      setAuthenticated(true);
      if (userData) setUser(JSON.parse(userData));
    }
  }, []);

  const login = (token: string, userData?: any) => {
    localStorage.setItem("authToken", token);
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      setUser(userData);
    }
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error();
  }
  return context;
}
