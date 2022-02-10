import React, { createContext, useState } from "react";
import { iRestaurant } from "../restaurant/context";

export type iFavouriteContext = {
  favourites: iRestaurant[];
  addFavourite: (restaurant: iRestaurant) => void;
  removeFavourite: (restaurant: iRestaurant) => void;
};

type iFavouriteContextProvider = {
  children: JSX.Element;
};

const favouriteContext = createContext<iFavouriteContext>({
  favourites: [],
  addFavourite: (fav: iRestaurant) => null,
  removeFavourite: (fav: iRestaurant) => null,
});

function FavouriteContextProvider({ children }: iFavouriteContextProvider) {
  const [favourites, setFavourites] = useState<iRestaurant[]>([]);

  const addFavourite = (fav: iRestaurant) => {
    if (fav) setFavourites([...favourites, fav]);
  };
  const removeFavourite = (fav: iRestaurant) => {
    const newFavs = favourites.filter((item) => item.place_id !== fav.place_id)
    setFavourites(newFavs)
  };
  return (
    <favouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </favouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
