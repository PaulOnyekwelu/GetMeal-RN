import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { iUser } from "./context";

export const loginRequest = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response) {
      const user: iUser = response.user;
      return user;
    }
  } catch (error) {
    return error;
  }
};
