import React, { useState, useContext } from "react";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { CustomSafeAreaView, PaddedView } from "../styles";
import {
  ActivityIndicatorView,
  RestaurantInfoCardWrapper,
  RestaurantListView,
  StyledTitle,
} from "./restaurantStyles";
import { FlatList } from "react-native";
import { restaurantContext } from "../../services/restaurant/context";
import SearchComponent from "./SearchComponent";

const RestaurantScreen = () => {
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
              <RestaurantInfoCardWrapper>
                <RestaurantInfoCard restuarant={item} />
              </RestaurantInfoCardWrapper>
            )}
            keyExtractor={(item) => item.place_id}
          />
        </RestaurantListView>
      )}
    </CustomSafeAreaView>
  );
};

export default RestaurantScreen;
