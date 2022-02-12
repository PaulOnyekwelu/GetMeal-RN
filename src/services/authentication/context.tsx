import React, { createContext, useState } from "react";
import { loginRequest, registerRequest, logOutUser } from "./service";

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
  error: string | null;
  loginUser: (email: string, password: string) => void;
  registerUser: (
    email: string,
    password: string,
    repeatPassword: string
  ) => void;
  logOutUser: () => void;
};

export const AuthContext = createContext<iAuthContext>({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: "",
  loginUser: () => null,
  registerUser: () => null,
  logOutUser: () => null,
});

const AuthContextProvider = ({ children }: iAuthContextProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      if (!email || !password)
        throw Error("Error:: all field are required");
      const authUser: iUser = await loginRequest(email, password);
      setUser(authUser);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.toString().split(":")[2]);
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
      if (!email || !password || !repeatPassword)
      throw Error("Error:: all field are required");
      if (password !== repeatPassword) {
        throw Error("Error: Password and repeat password does not match!");
      }
      const authUser: iUser = await registerRequest(email, password);
      setUser(authUser);

      setIsLoading(false);
    } catch (error: any) {
      setError(error.toString().split(":")[2]);
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
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
