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
import FavouriteIcon from "../../components/FavouriteIcon";
import FavouriteRestaurants from "./components/FavouriteRestaurants";
import { favouriteContext } from "../../services/favourites/context";

type props = StackScreenProps<restaurantParamList, "Restaurant">;

const RestaurantScreen = ({ navigation }: props) => {
  const { restaurants, error, isLoading } = useContext(restaurantContext);
  const {favourites} = useContext(favouriteContext)
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
      {showFav && <FavouriteRestaurants favourites={favourites} />}
      {!isLoading && restaurants && restaurants.length > 0 && (
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
      )}
    </CustomSafeAreaView>
  );
};

export default RestaurantScreen;
