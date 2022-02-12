import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { iUser } from "./context";

export const loginRequest = async (
  email: string,
  password: string
): Promise<any> => {
  const auth = getAuth();
  const response = await signInWithEmailAndPassword(auth, email, password);
  if (response) {
    const user: iUser = response.user;
    return user;
  }
};

export const registerRequest = async (
  email: string,
  password: string
): Promise<any> => {
  const auth = getAuth();
  const response = await createUserWithEmailAndPassword(auth, email, password);
  if (response) {
    const user: iUser = response.user;
    return user;
  }
};

export const logout = async () => {
  const auth = getAuth();
  return signOut(auth);
};
