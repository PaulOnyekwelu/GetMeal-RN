import React, { createContext, useContext, useEffect, useState } from "react";
import { locationContext } from "../location/context";
import { mockImages } from "./mock";
import { restaurantService } from "./service";

type iRestaurantContextProvider = {
  children: JSX.Element;
};

export type iRestaurant = {
  name: string;
  icon: string;
  photos: string[];
  vicinity: string;
  rating: number;
  opening_hours: {
    open_now: boolean;
  };
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
};

type iRestaurantContext = {
  restaurants: iRestaurant[];
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
          const modifiedRes = results.map((item: iRestaurant) => {
            return {
              ...item,
              photos: mockImages,
            };
          });
          setRestaurants(modifiedRes);
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
