import React, { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./service";

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
  registerUser: (email: string, password: string, repeatPassword: string) => void;
};

export const AuthContext = createContext<iAuthContext>({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: "",
  loginUser: () => null,
  registerUser: () => null,
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

  const registerUser = async (
    email: string,
    password: string,
    repeatPassword: string
  ) => {
    try {
      setIsLoading(true);
      if (password !== repeatPassword) {
        throw Error("Error: Password and repeat password does not match!");
      }
      const authUser: iUser = await registerRequest(email, password);
      setUser(authUser);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.toString());
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
