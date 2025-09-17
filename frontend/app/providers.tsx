"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { AuthProvider } from "@/contexts/auth-context";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <NextThemesProvider {...themeProps}>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </AuthProvider>
  );
}