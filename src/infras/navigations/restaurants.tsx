import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurant";
import RestaurantDetails from "../../features/restaurant/RestaurantDetails";
import { iRestaurant } from "../../features/restaurant/RestaurantInfoCard";

export type restaurantParamList = {
  Restaurants: undefined;
  RestaurantDetails: { item: iRestaurant };
};

const RestaurantStack = createStackNavigator<restaurantParamList>();
const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
