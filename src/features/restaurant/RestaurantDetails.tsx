import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../infras/navigations/restaurants";

type props = StackScreenProps<restaurantParamList, "RestaurantDetails">;

const RestaurantDetails = ({ route }: props) => {
  return (
    <View>
      <RestaurantInfoCard restuarant={route.params.item} />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});
