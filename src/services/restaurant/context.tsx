import React, { createContext, useEffect, useState } from "react";
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

  const retrieveRestaurants = () => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      (async () => {
        try {
          const { results } = await restaurantService();
          setRestaurants(results);
          setIsLoading(false);
        } catch (error: any) {
          console.log({ error });
          setError(error);
        }
      })();
    }, 5000);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <restaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </restaurantContext.Provider>
  );
};

export default RestaurantsContextProvider;
