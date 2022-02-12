import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";
import { theme } from "./src/infras/theme";
import Navigator from "./src/infras/navigations";
import { initializeApp, getApps } from "firebase/app";
import AuthContextProvider from "./src/services/authentication/context";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

if (Object.keys(getApps()).length !== 0) {
  getApps();
} else {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Navigator />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
