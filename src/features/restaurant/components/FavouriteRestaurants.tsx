import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FavRestaurant, FavRestaurantWrapper } from "../restaurantStyles";
import MapCallout from "../../map/components/MapCallout";
import { ScrollView } from "react-native-gesture-handler";
import { iRestaurant } from "../../../services/restaurant/context";

type iFavouriteRestaurants = {
  favourites: iRestaurant[];
};

const FavouriteRestaurants = ({ favourites }: iFavouriteRestaurants) => {
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
            <FavRestaurant>
              <MapCallout restaurant={fav} />
            </FavRestaurant>
          ))}
      </ScrollView>
    </FavRestaurantWrapper>
  );
};

export default FavouriteRestaurants;
