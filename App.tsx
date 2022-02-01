import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import RestaurantScreen from "./src/features/restaurant";
import { theme } from "./src/theme";
import RestaurantsContextProvider from "./src/services/restaurant/context";

const SettingScreen = () => <Text>Setting section</Text>;
const MapsScreen = () => <Text>Maps section</Text>;

const Tabs = createBottomTabNavigator();

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
      <RestaurantsContextProvider>
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={(props) => ({
              headerShown: false,
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tabs.Screen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-restaurant" size={size} color={color} />
                ),
              }}
              name="Restaurants"
              component={RestaurantScreen}
            />
            <Tabs.Screen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-map" size={size} color={color} />
                ),
              }}
              name="Maps"
              component={MapsScreen}
            />
            <Tabs.Screen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-settings" size={size} color={color} />
                ),
              }}
              name="Settings"
              component={SettingScreen}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </RestaurantsContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
