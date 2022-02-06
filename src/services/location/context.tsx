import React, { createContext, useState } from "react";
import { getLatLng, locationRequest } from "./service";

type iLocationContextProvider = {
  children: JSX.Element;
};

type iLocation =
  | { lat: string | undefined; lng: string | undefined }
  | undefined;

type iLocationContext = {
  location: iLocation;
  isLoading: boolean;
  error: string | null;
  keyword: string;
  onSearch: (searchTerm: string) => void;
};

export const locationContext = createContext<iLocationContext>({
  location: undefined,
  isLoading: false,
  error: null,
  keyword: "",
  onSearch: (searchTerm: string) => {},
});

const LocationContextProvider = ({ children }: iLocationContextProvider) => {
  const [location, setLocation] = useState<iLocation>(undefined);
  const [keyword, setKeyword] = useState("san francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm: string) => {
    setIsLoading(true);
    setLocation(undefined);
    setKeyword(searchTerm);
    if (!searchTerm.length) return;
    locationRequest(searchTerm)
      .then(getLatLng)
      .then((result) => {
        setLocation(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };
  return (
    <locationContext.Provider
      value={{ location, keyword, isLoading, error, onSearch }}
    >
      {children}
    </locationContext.Provider>
  );
};

export default LocationContextProvider;