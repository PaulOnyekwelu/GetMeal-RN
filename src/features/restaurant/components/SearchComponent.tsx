import React, { useContext, useEffect, useState } from "react";
import { StyledSearchView } from "../restaurantStyles";
import { Searchbar } from "react-native-paper";
import { locationContext } from "../../../services/location/context";

type iSearchComponent = {
  showFav: boolean;
  toggleShowFav: () => void;
};

const SearchComponent = ({ showFav, toggleShowFav }: iSearchComponent) => {
  const { onSearch, keyword } = useContext(locationContext);
  const [searchValue, setSearchValue] = useState(keyword);

  useEffect(() => {
    setSearchValue(keyword);
  }, [keyword]);

  return (
    <StyledSearchView>
      <Searchbar
        icon={showFav ? "heart" : "heart-outline"}
        onIconPress={toggleShowFav}
        autoComplete={false}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        onSubmitEditing={() => onSearch(searchValue)}
      />
    </StyledSearchView>
  );
};

export default SearchComponent;
