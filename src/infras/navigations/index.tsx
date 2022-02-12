import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../../services/authentication/context";
import FavouriteContextProvider from "../../services/favourites/context";
import LocationContextProvider from "../../services/location/context";
import RestaurantsContextProvider from "../../services/restaurant/context";
import AppNavigator from "./app";
import AuthNavigator from "./auth";

const Navigator = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <FavouriteContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouriteContextProvider>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
