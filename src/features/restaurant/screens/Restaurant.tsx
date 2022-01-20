import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { CustomSafeAreaView, PaddedView, RestaurantListView } from "../styles";

const Restaurant = () => {
  const [value, setValue] = useState("");
  const searchHandler = (val: string) => {
    setValue(val);
  };

  return (
    <CustomSafeAreaView>
      <PaddedView>
        <Searchbar
          autoComplete={false}
          value={value}
          onChangeText={searchHandler}
        />
      </PaddedView>
      <RestaurantListView>
        <RestaurantInfoCard />
      </RestaurantListView>
      {/* <StatusBar style="auto" /> */}
    </CustomSafeAreaView>
  );
};

export default Restaurant;
