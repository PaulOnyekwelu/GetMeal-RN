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
      <FavouriteContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouriteContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
