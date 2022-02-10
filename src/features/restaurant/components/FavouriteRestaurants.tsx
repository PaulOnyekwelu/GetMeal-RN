import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FavRestaurant, FavRestaurantWrapper } from "../restaurantStyles";
import MapCallout from "../../map/components/MapCallout";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { iRestaurant } from "../../../services/restaurant/context";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../../infras/navigations/restaurants";

type props = StackScreenProps<restaurantParamList, "Restaurant">;

type iFavouriteRestaurants = {
  favourites: iRestaurant[];
  navigateTo: props['navigation']['navigate'];
};

const FavouriteRestaurants = ({
  favourites,
  navigateTo,
}: iFavouriteRestaurants) => {
  return (
    <FavRestaurantWrapper>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {favourites &&
          favourites.map((fav) => (
            <TouchableOpacity
              onPress={() =>
                navigateTo("RestaurantDetails", { restaurant: fav })
              }
            >
              <FavRestaurant>
                <MapCallout restaurant={fav} />
              </FavRestaurant>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </FavRestaurantWrapper>
  );
};

export default FavouriteRestaurants;
