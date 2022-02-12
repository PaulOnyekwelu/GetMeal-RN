import { View } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { iRestaurant } from "../services/restaurant/context";
import { favouriteContext } from "../services/favourites/context";

type iFavouriteIcon = {
  restaurant: iRestaurant;
};

const FavIconWrapper = styled(View)`
  position: absolute;
  right: 35px;
  top: 30px;
  z-index: 9;
`;

const FavouriteIcon = ({ restaurant }: iFavouriteIcon) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(favouriteContext);
  const isFavourite = favourites.find(
    (item) => item.place_id === restaurant.place_id
  );
  return (
    <FavIconWrapper>
      <TouchableOpacity
        onPress={() =>
          isFavourite ? removeFavourite(restaurant) : addFavourite(restaurant)
        }
      >
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={30}
          color={isFavourite ? "red" : "white"}
        />
      </TouchableOpacity>
    </FavIconWrapper>
  );
};

export default FavouriteIcon;
