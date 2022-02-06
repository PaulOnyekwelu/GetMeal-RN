import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { StyledSearchView } from "./restaurantStyles";
import { Searchbar } from "react-native-paper";
import { locationContext } from "../../services/location/context";

const SearchComponent = () => {
  const { onSearch, keyword } = useContext(locationContext);
  const [searchValue, setSearchValue] = useState(keyword);

  useEffect(() => {
    if (searchValue) onSearch(searchValue);
  }, []);

  return (
    <StyledSearchView>
      <Searchbar
        autoComplete={false}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        onSubmitEditing={() => onSearch(searchValue)}
      />
    </StyledSearchView>
  );
};

export default SearchComponent;
