import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { CustomSafeAreaView, PaddedView } from "../styles";
import {
  ActivityIndicatorView,
  RestaurantInfoCardWrapper,
  RestaurantListView,
  StyledSearchView,
  StyledTitle,
} from "./restaurantStyles";
import { FlatList } from "react-native";
import { restaurantContext } from "../../services/restaurant/context";

const RestaurantScreen = () => {
  const [value, setValue] = useState("");
  const searchHandler = (val: string) => {
    setValue(val);
  };

  const { restaurants, error, isLoading } = useContext(restaurantContext);

  return (
    <CustomSafeAreaView>
      <StyledSearchView>
        <Searchbar
          autoComplete={false}
          value={value}
          onChangeText={searchHandler}
        />
      </StyledSearchView>
      {isLoading && (
        <ActivityIndicatorView />
      )}
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
