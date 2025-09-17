import { SVGProps } from "react";
import { StringToBoolean } from "tailwind-variants";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface LoginFormData {
  login: string;
  password: string;
}

export interface UserType {
  id: Number;
  role: string;
  email: string;
  name: string;
  lastName: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (token: string, userData?: UserType) => void;
  logout: () => void;
}
