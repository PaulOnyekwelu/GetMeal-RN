import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { StackScreenProps } from "@react-navigation/stack";
import { restaurantParamList } from "../../infras/navigations/restaurants";
import { CustomSafeAreaView } from "../styles";

type props = StackScreenProps<restaurantParamList, "RestaurantDetails">;

const RestaurantDetails = ({ route }: props) => {
  return (
    <CustomSafeAreaView>
      <RestaurantInfoCard restuarant={route.params.restaurant} />
    </CustomSafeAreaView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});
