"use client";

import { useAuth } from "@/contexts/auth-context";
import { Navbar } from "./navbar";

export function AuthNavbar() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return <Navbar />;
}