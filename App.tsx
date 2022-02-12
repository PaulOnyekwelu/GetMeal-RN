import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infras/theme";
import RestaurantsContextProvider from "./src/services/restaurant/context";
import LocationContextProvider from "./src/services/location/context";
import Navigator from "./src/infras/navigations";
import FavouriteContextProvider from "./src/services/favourites/context";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const auth = getAuth();
        const response = await signInWithEmailAndPassword(
          auth,
          "silanka@gmail.com",
          "pass123"
        );
        console.log({ user: response.user });
        setIsAuthenticated(true);
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return null;
  if (!isAuthenticated) return null;
  return (
    <ThemeProvider theme={theme}>
      <FavouriteContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <AuthContextProvider>
              <Navigator />
            </AuthContextProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouriteContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
