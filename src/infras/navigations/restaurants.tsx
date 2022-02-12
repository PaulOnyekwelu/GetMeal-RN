import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurant";
import RestaurantDetails from "../../features/restaurant/RestaurantDetails";
import { iRestaurant } from "../../services/restaurant/context";

export type restaurantParamList = {
  Restaurant: undefined;
  RestaurantDetails: { restaurant: iRestaurant };
};

const RestaurantStack = createStackNavigator<restaurantParamList>();
const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
