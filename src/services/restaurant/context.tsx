import React, { createContext, useEffect, useState } from "react";
import { restaurantService } from "./service";

type iRestaurantContextProvider = {
  children: JSX.Element;
};

const RestaurantsContextProvider = ({
  children,
}: iRestaurantContextProvider) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const restaurantContext = createContext({});

  const retrieveRestaurants = () => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      (async () => {
        try {
          const { results } = await restaurantService();
          setRestaurants(results);
        } catch (error: any) {
          console.log({ error });
          setError(error);
        }
      })();
    }, 3000);
    setIsLoading(false);
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
