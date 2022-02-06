import React from "react";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import OpenSvg from "../../../assets/open";
import {
  InfoView,
  RestaurantRatingView,
  StyledCardCover,
  StyledClosedText,
  StyledParagraph,
  StyledRating,
  StyledTitle,
} from "./restaurantStyles";
import { StyledIcon, StyledRow } from "../styles";

export type iRestaurant = {
  name: string;
  icon: string;
  photos: any[];
  vicinity: string;
  rating: number;
  opening_hours: {
    open_now: boolean;
  };
  business_status: string;
};

const RestaurantInfoCard = ({ restuarant }: { restuarant: iRestaurant }) => {
  const {
    name,
    icon,
    photos: [],
    vicinity,
    rating,
    opening_hours,
    business_status,
  } = restuarant;
  const ratedStar = (value: number) => {
    if (value) {
      let rated = value > 5 ? 5 : value <= 0 ? 0 : value;
      return Array.from(new Array(Math.floor(rated)));
    }
    return [];
  };

  const unRatedStar = (rating: number) => {
    if (rating) {
      const diff = 5 - Math.floor(rating);
      const unrated = diff <= 0 ? 0 : diff >= 5 ? 5 : diff;
      return Array.from(new Array(Math.floor(unrated)));
    }
    return [];
  };

  return (
    <Card>
      <StyledCardCover source={{ uri: "https://picsum.photos/700" }} />
      <InfoView>
        <StyledTitle>{name}</StyledTitle>
        <RestaurantRatingView $justify="space-between">
          <StyledRating>
            {rating &&
              ratedStar(rating).map((_, index) => (
                <Entypo key={index} name="star" size={20} color="gold" />
              ))}
            {rating &&
              unRatedStar(rating).map((_, index) => (
                <Entypo key={index} name="star" size={20} color="grey" />
              ))}
          </StyledRating>
          <StyledRow>
            {business_status && business_status === "CLOSED_TEMPORARILY" && (
              <StyledClosedText>CLOSED_TEMPORARILY</StyledClosedText>
            )}
            {opening_hours && opening_hours.open_now && (
              <SvgXml xml={OpenSvg} width={20} height={20} />
            )}
            {icon && <StyledIcon source={{ uri: icon }} />}
          </StyledRow>
        </RestaurantRatingView>
        <StyledParagraph>{vicinity}</StyledParagraph>
      </InfoView>
    </Card>
  );
};

export default RestaurantInfoCard;
