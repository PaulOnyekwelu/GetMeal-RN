import { View } from "react-native";
import React, { useContext } from "react";
import { favouriteContext } from "../../services/favourites/context";
import RestaurantList from "../restaurant/components/RestaurantList";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeViewNoMargin } from "../styles";
import { restaurantParamList } from "../../infras/navigations/restaurants";

type props = StackScreenProps<restaurantParamList, "Restaurant">;

const FavouritesScreen = ({ navigation }: props) => {
  const { favourites } = useContext(favouriteContext);
  return (
    <SafeViewNoMargin>
      <View style={{ paddingTop: 20 }} />
      <RestaurantList restaurants={favourites} navigation={navigation} />
    </SafeViewNoMargin>
  );
};

export default FavouritesScreen;
