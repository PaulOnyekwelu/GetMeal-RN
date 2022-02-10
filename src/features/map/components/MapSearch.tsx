import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { locationContext } from "../../../services/location/context";
import { StyledSearchView } from "../mapStyle";

const MapSearch = () => {
  const { onSearch, keyword } = useContext(locationContext);
  const [searchValue, setSearchValue] = useState(keyword);

  useEffect(() => {
    setSearchValue(keyword)
  }, [keyword]);

  return (
    <StyledSearchView>
      <Searchbar
        icon="map"
        autoComplete={false}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        onSubmitEditing={() => onSearch(searchValue)}
      />
    </StyledSearchView>
  );
};

export default MapSearch;
