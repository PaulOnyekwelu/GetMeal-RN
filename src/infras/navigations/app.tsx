import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsNavigator, { restaurantParamList } from "./restaurants";
import MapScreen from "../../features/map/MapScreen";
import settingsNavigator from "./settings";


export type rootNavigationParamList = {
  Restaurants: restaurantParamList;
  Maps: undefined;
  Settings: undefined;
};

const Tabs = createBottomTabNavigator<rootNavigationParamList>();

export default function AppNavigator() {
  return (
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
        component={RestaurantsNavigator}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-map" size={size} color={color} />
          ),
        }}
        name="Maps"
        component={MapScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings" size={size} color={color} />
          ),
        }}
        name="Settings"
        component={settingsNavigator}
      />
    </Tabs.Navigator>
  );
}
