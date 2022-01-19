import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from "react-native";
import SearchBar from "../../../components/SearchBar";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

const Restaurant = () => {
  const [value, setValue] = useState("");
  const searchHandler = (val: string) => {
    setValue(val);
  };
  console.log(StatusBar.currentHeight);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar value={value} searchHandler={searchHandler} />
      </View>
      <View style={styles.content}>
        <RestaurantInfoCard />
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : undefined,
  },
  searchBar: {
    padding: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
