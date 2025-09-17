"use client";

import { useAuth } from "@/contexts/auth-context";
import LoginPage from "@/app/login/page";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return <>{children}</>;
}