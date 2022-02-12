import {
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  RestaurantInfoCardWrapper,
  RestaurantListView,
} from "../restaurantStyles";
import FavouriteIcon from "../../../components/FavouriteIcon";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { iRestaurant } from "../../../services/restaurant/context";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../../infras/navigations/restaurants";

type props = StackScreenProps<restaurantParamList, "Restaurant">;

type iRestaurantList = {
  restaurants: iRestaurant[];
  navigation: props["navigation"];
};

const RestaurantList = ({ restaurants, navigation }: iRestaurantList) => {
  return (
    <RestaurantListView>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <RestaurantInfoCardWrapper>
              <FavouriteIcon restaurant={item} />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </RestaurantInfoCardWrapper>
          </>
        )}
        keyExtractor={(item) => item.place_id}
      />
    </RestaurantListView>
  );
};

export default RestaurantList;
