import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

interface iSearchBar {
  value: string;
  searchHandler: (val: string) => void;
}

const SearchBar = ({ value, searchHandler }: iSearchBar) => {
  return (
    <Searchbar
      // placeholder="Search"
      value={value}
      onChangeText={searchHandler}
      autoComplete={false}
      style={styles.searchBar}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {},
});
