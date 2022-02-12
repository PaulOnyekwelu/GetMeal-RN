import React, { useContext, useState } from "react";
import { CustomSafeAreaView, PaddedView } from "../styles";
import { ActivityIndicatorView, StyledTitle } from "./restaurantStyles";
import { restaurantContext } from "../../services/restaurant/context";
import SearchComponent from "./components/SearchComponent";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../infras/navigations/restaurants";
import FavouriteRestaurants from "./components/FavouriteRestaurants";
import { favouriteContext } from "../../services/favourites/context";
import RestaurantList from "./components/RestaurantList";

type props = StackScreenProps<restaurantParamList, "Restaurant">;

const RestaurantScreen = ({ navigation }: props) => {
  const { restaurants, error, isLoading } = useContext(restaurantContext);
  const { favourites } = useContext(favouriteContext);
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
      {showFav && (
        <FavouriteRestaurants
          navigateTo={navigation.navigate}
          favourites={favourites}
        />
      )}
      {!isLoading && restaurants && restaurants.length > 0 && (
        <RestaurantList restaurants={restaurants} navigation={navigation} />
      )}
    </CustomSafeAreaView>
  );
};

export default RestaurantScreen;
