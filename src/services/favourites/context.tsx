import React, { createContext, useContext, useEffect, useState } from "react";
import { iRestaurant } from "../restaurant/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../authentication/context";

export type iFavouriteContext = {
  favourites: iRestaurant[];
  addFavourite: (restaurant: iRestaurant) => void;
  removeFavourite: (restaurant: iRestaurant) => void;
};

type iFavouriteContextProvider = {
  children: JSX.Element;
};

export const favouriteContext = createContext<iFavouriteContext>({
  favourites: [],
  addFavourite: () => null,
  removeFavourite: () => null,
});

function FavouriteContextProvider({ children }: iFavouriteContextProvider) {
  const [favourites, setFavourites] = useState<iRestaurant[]>([]);
  const {user} = useContext(AuthContext)

  const loadFavorites = async () => {
    try {
      const favs = await AsyncStorage.getItem(`@favourites-${user?.uid}`);
      if (favs) setFavourites(JSON.parse(favs));
    } catch (error) {
      console.log({ error });
    }
  };

  const saveFavorites = async (favs: iRestaurant[]) => {
    try {
      await AsyncStorage.setItem(`@favourites-${user?.uid}`, JSON.stringify(favs));
    } catch (error) {
      console.log({ error });
    }
  };

  const addFavourite = (fav: iRestaurant) => {
    if (fav) {
      const newFavs = [...favourites, fav];
      saveFavorites(newFavs);
      setFavourites(newFavs);
    }
  };

  const removeFavourite = (fav: iRestaurant) => {
    const newFavs = favourites.filter((item) => item.place_id !== fav.place_id);
    saveFavorites(newFavs)
    setFavourites(newFavs);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <favouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </favouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
