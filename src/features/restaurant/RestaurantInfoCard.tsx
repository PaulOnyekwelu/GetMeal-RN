import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import OpenSvg from "../../../assets/open";
import {
  InfoView,
  RestaurantRatingView,
  StyledCardCover,
  StyledParagraph,
  StyledRating,
  StyledTitle,
} from "./restaurantStyles";

const RestaurantInfoCard = ({ rating = 3 }) => {
  const ratedStar = (value: number) => {
    let rated = value > 5 ? 5 : value <= 0 ? 0 : value;
    return Array.from(new Array(Math.floor(rated)));
  };

  const unRatedStar = () => {
    const diff = 5 - Math.floor(rating);
    const unrated = diff <= 0 ? 0 : diff >= 5 ? 5 : diff;
    return Array.from(new Array(Math.floor(unrated)));
  };

  return (
    <Card>
      <StyledCardCover source={{ uri: "https://picsum.photos/700" }} />
      <InfoView>
        <StyledTitle>Some Restaurant</StyledTitle>
        <RestaurantRatingView $justify="space-between">
          <StyledRating>
            {ratedStar(rating).map((_, index) => (
              <Entypo key={index} name="star" size={20} color="gold" />
            ))}
            {unRatedStar().map((_, index) => (
              <Entypo key={index} name="star" size={20} color="grey" />
            ))}
          </StyledRating>
          <View>
            <SvgXml xml={OpenSvg} width={20} height={20} />
          </View>
        </RestaurantRatingView>
        <StyledParagraph>Card content</StyledParagraph>
      </InfoView>
    </Card>
  );
};

export default RestaurantInfoCard;
