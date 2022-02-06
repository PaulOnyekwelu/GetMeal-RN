import React, { useContext } from "react";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { CustomSafeAreaView, PaddedView } from "../styles";
import {
  ActivityIndicatorView,
  RestaurantInfoCardWrapper,
  RestaurantListView,
  StyledTitle,
} from "./restaurantStyles";
import { FlatList, TouchableOpacity } from "react-native";
import { restaurantContext } from "../../services/restaurant/context";
import SearchComponent from "./SearchComponent";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../infras/navigations/restaurants";

type props = StackScreenProps<restaurantParamList, "Restaurants">;

const RestaurantScreen = ({ navigation }: props) => {
  const { restaurants, error, isLoading } = useContext(restaurantContext);

  return (
    <CustomSafeAreaView>
      <SearchComponent />
      {isLoading && <ActivityIndicatorView />}
      {!isLoading && error && (
        <PaddedView>
          <StyledTitle>{error}</StyledTitle>
        </PaddedView>
      )}
      {!isLoading && restaurants && restaurants.length > 0 && (
        <RestaurantListView>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant: item })
                }
              >
                <RestaurantInfoCardWrapper>
                  <RestaurantInfoCard restuarant={item} />
                </RestaurantInfoCardWrapper>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.place_id}
          />
        </RestaurantListView>
      )}
    </CustomSafeAreaView>
  );
};

export default RestaurantScreen;
