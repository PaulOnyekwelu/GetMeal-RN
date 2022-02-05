import React, { createContext, useContext, useEffect, useState } from "react";
import { locationContext } from "../location/context";
import { restaurantService } from "./service";

type iRestaurantContextProvider = {
  children: JSX.Element;
};

type iRestaurantContext = {
  restaurants: any[];
  isLoading: boolean;
  error: string | null;
};

export const restaurantContext = createContext<iRestaurantContext>({
  restaurants: [],
  isLoading: false,
  error: null,
});

const RestaurantsContextProvider = ({
  children,
}: iRestaurantContextProvider) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(locationContext);
  const { lat, lng } = location || { lat: undefined, lng: undefined };

  const retrieveRestaurants = (locationString: string) => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      (async () => {
        try {
          const { results } = await restaurantService(locationString);
          setRestaurants(results);
          setError(null);
          setIsLoading(false);
        } catch (err: any) {
          setError(err);
          setRestaurants([]);
          setIsLoading(false);
        }
      })();
    }, 2000);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    retrieveRestaurants(`${lat},${lng}`);
  }, [location]);

  return (
    <restaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </restaurantContext.Provider>
  );
};

export default RestaurantsContextProvider;
