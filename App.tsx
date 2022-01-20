import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import Restaurant from "./src/features/restaurant/screens/Restaurant";
import { theme } from "./src/theme";

export default function App() {
  return <ThemeProvider theme={theme}>
  <Restaurant />
   <StatusBar style="auto" />
  </ThemeProvider>
}

const styles = StyleSheet.create({});
