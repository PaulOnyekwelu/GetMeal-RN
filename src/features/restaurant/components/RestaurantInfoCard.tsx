import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { PaddedNoTopView, PaddedView, StyledCardCover, StyledParagraph, StyledTitle } from "../styles";

const RestaurantInfoCard = () => {
  return (
    <Card>
      <StyledCardCover source={{ uri: "https://picsum.photos/700" }} />
      <PaddedNoTopView>
        <StyledTitle>Some Restaurant</StyledTitle>
        <StyledParagraph>Card content</StyledParagraph>
      </PaddedNoTopView>
    </Card>
  );
};

export default RestaurantInfoCard;
