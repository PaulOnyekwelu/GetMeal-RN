import React, { createContext, useState } from "react";

type iLocationContextProvider = {
  children: JSX.Element;
};

type iLocationContext = {
  location: any[];
  isLoading: boolean;
  error: string | null;
  keyword: string | null;
  onSearch: () => null;
};

export const locationContext = createContext<iLocationContext>({
  location: [],
  isLoading: false,
  error: null,
  keyword: "",
  onSearch: () => null,
});

const LocationContextProvider = ({ children }: iLocationContextProvider) => {
  const [location, setLocation] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSearch = () => null;
  return (
    <locationContext.Provider
      value={{ location, keyword, isLoading, error, onSearch }}
    >
      {children}
    </locationContext.Provider>
  );
};

export default LocationContextProvider;
