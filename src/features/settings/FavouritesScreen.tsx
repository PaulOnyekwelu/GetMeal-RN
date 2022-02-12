import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { favouriteContext } from "../../services/favourites/context";
import RestaurantList from "../restaurant/components/RestaurantList";
import { StackScreenProps } from "@react-navigation/stack";
import { CustomSafeAreaView } from "../styles";
import { restaurantParamList } from "../../infras/navigations/restaurants";

type props = StackScreenProps<restaurantParamList, "Restaurant">;

const FavouritesScreen = ({ navigation }: props) => {
  const { favourites } = useContext(favouriteContext);
  return (
    <CustomSafeAreaView>
      <RestaurantList restaurants={favourites} navigation={navigation} />
    </CustomSafeAreaView>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({});
