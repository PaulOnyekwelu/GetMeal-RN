import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import { loginRequest } from "./service";

export type iUser = {
  createdAt?: number | null;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  lastLoginAt?: number;
  stsTokenManager?: {
    expirationTime: number;
  };
  uid: string;
};

type iAuthContextProvider = {
  children: JSX.Element;
};

type iAuthContext = {
  isAuthenticated: boolean;
  user: iUser | null;
  isLoading: boolean;
  error: string;
  loginUser: (email: string, password: string) => void;
};

export const AuthContext = createContext<iAuthContext>({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: "",
  loginUser: () => null,
});

const AuthContextProvider = ({ children }: iAuthContextProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loginUser = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const authUser: iUser = await loginRequest(email, password);
      setUser(authUser);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.toString());
      setIsLoading(false);
    }
  };

  const registerUser = (email: string, password: string, repeatPassword: string) => {};

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
