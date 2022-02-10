import { Platform, StyleSheet } from "react-native";
import React from "react";
import {
  CompactImage,
  StyledCalloutText,
  StyledCalloutView,
  CompactWebView,
} from "../mapStyle";
import { iRestaurant } from "../../../services/restaurant/context";

type props = {
  restaurant: iRestaurant;
};

const MapCallout = ({ restaurant }: props) => {
  const isAndroid = Platform.OS === "android";
  return (
    <StyledCalloutView>
      {isAndroid ? (
        <CompactWebView source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <StyledCalloutText>{restaurant.name}</StyledCalloutText>
    </StyledCalloutView>
  );
};

export default MapCallout;

const styles = StyleSheet.create({});
