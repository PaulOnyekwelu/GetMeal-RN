import React, { useContext, useState } from "react";
import RestaurantInfoCard from "./components/RestaurantInfoCard";
import { CustomSafeAreaView, PaddedView } from "../styles";
import {
  ActivityIndicatorView,
  RestaurantInfoCardWrapper,
  RestaurantListView,
  StyledTitle,
} from "./restaurantStyles";
import { FlatList, TouchableOpacity } from "react-native";
import { restaurantContext } from "../../services/restaurant/context";
import SearchComponent from "./components/SearchComponent";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../infras/navigations/restaurants";

type props = StackScreenProps<restaurantParamList, "Restaurant">;

const RestaurantScreen = ({ navigation }: props) => {
  const { restaurants, error, isLoading } = useContext(restaurantContext);
  const [showFav, setShowFav] = useState(false);

  return (
    <CustomSafeAreaView>
      <SearchComponent
        showFav={showFav}
        toggleShowFav={() => setShowFav(!showFav)}
      />
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
