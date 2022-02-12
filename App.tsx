import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infras/theme";
import Navigator from "./src/infras/navigations";
import { initializeApp } from "firebase/app";
import AuthContextProvider from "./src/services/authentication/context";

const firebaseConfig = {
  apiKey: "AIzaSyCREnyMvaplhuOTQ6HmIAO_Y3u31jgfJ1o",
  authDomain: "getmeal-56abf.firebaseapp.com",
  projectId: "getmeal-56abf",
  storageBucket: "getmeal-56abf.appspot.com",
  messagingSenderId: "72357226503",
  appId: "1:72357226503:web:796266b11970169496a2a2",
};

initializeApp(firebaseConfig);

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
