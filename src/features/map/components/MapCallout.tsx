import { StyleSheet } from "react-native";
import React from "react";
import { StyledCalloutImage, StyledCalloutText, StyledCalloutView } from "../mapStyle";
import { iRestaurant } from "../../restaurant/components/RestaurantInfoCard";

type props = {
  restaurant: iRestaurant;
};

const MapCallout = ({ restaurant }: props) => {
  return (
    <StyledCalloutView>
      <StyledCalloutImage source={{ uri: "https://picsum.photos/700" }} />
      <StyledCalloutText>{restaurant.name}</StyledCalloutText>
    </StyledCalloutView>
  );
};

export default MapCallout;

const styles = StyleSheet.create({});
