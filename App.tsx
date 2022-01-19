import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Restaurant from "./src/features/restaurant/screens/Restaurant";

export default function App() {
  return <>
  <Restaurant />
   <StatusBar style="auto" />
  </>
}

const styles = StyleSheet.create({});
