import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { CustomSafeAreaView } from "../styles";
import { RestaurantInfoCardWrapper, RestaurantListView, StyledSearchView } from "./restaurantStyles";
import { FlatList } from "react-native";

const RestaurantScreen = () => {
  const [value, setValue] = useState("");
  const searchHandler = (val: string) => {
    setValue(val);
  };

  return (
    <CustomSafeAreaView>
      <StyledSearchView>
        <Searchbar
          autoComplete={false}
          value={value}
          onChangeText={searchHandler}
        />
      </StyledSearchView>
      <RestaurantListView>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={() => (
            <RestaurantInfoCardWrapper>
              <RestaurantInfoCard />
            </RestaurantInfoCardWrapper>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </RestaurantListView>
      {/* <StatusBar style="auto" /> */}
    </CustomSafeAreaView>
  );
};

export default RestaurantScreen;
