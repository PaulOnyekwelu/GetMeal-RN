import React, { createContext, useEffect, useState } from "react";
import { iRestaurant } from "../restaurant/context";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

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
  addFavourite: (fav: iRestaurant) => null,
  removeFavourite: (fav: iRestaurant) => null,
});

function FavouriteContextProvider({ children }: iFavouriteContextProvider) {
  const [favourites, setFavourites] = useState<iRestaurant[]>([]);

  const loadFavorites = async () => {
    try {
      const favs = await AsyncStorageLib.getItem("@favourites");
      if (favs) setFavourites(JSON.parse(favs));
    } catch (error) {
      console.log({ error });
    }
  };

  const saveFavorites = async (favs: iRestaurant[]) => {
    try {
      await AsyncStorageLib.setItem("@favourites", JSON.stringify(favs));
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
