import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RestaurantScreen from "../../features/restaurant";
import RestaurantsNavigator from "./restaurants";

const SettingScreen = () => <Text>Setting section</Text>;
const MapsScreen = () => <Text>Maps section</Text>;

const Tabs = createBottomTabNavigator();

export default function AppNavigator() {
  return (
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
          name="RestaurantsNavigator"
          component={RestaurantsNavigator}
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
  );
}
