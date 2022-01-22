import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import Restaurant from "./src/features/restaurant";
import { theme } from "./src/theme";

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
      <Restaurant />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
