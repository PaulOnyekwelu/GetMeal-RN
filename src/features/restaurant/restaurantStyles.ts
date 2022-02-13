import { Text, View, ScrollView } from "react-native";
import { ActivityIndicator, Card } from "react-native-paper";
import styled from "styled-components";
import { PaddedView, StyledRow } from "../styles";

export const InfoView = styled(PaddedView).attrs({
  $direction: "horizontal",
})`
  padding-bottom: ${({ theme }) => theme.sizes[1]};
`;

export const StyledTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const StyledClosedText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text.error};
`;

export const StyledParagraph = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.ui.secondary};
`;

export const RestaurantListView = styled(View)`
  flex: 1;
`;

export const StyledCardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.sizes[1]};
`;

export const RestaurantRatingView = styled(StyledRow).attrs({
  $justify: "space-between",
  $align: "stretch",
})`
  margin: ${({ theme }) => `${theme.sizes[0]} 0px`};
`;

export const StyledRating = styled(StyledRow).attrs({
  $justify: "flex-start",
  $align: "stretch",
})``;

export const StyledSearchView = styled(PaddedView)``;

export const FavRestaurantWrapper = styled(PaddedView).attrs({
  $direction: "horizontal",
})``;

export const FavRestaurant = styled(View)`
  padding: 5px;
`;

export const RestaurantInfoCardWrapper = styled(PaddedView).attrs((props) => ({
  // theme: {
  //   ...props.theme,
  //   sizes: props.theme.sizes.map((item: string, index: number) => {
  //     if (index === 1) {
  //       return "16px";
  //     }
  //     return item;
  //   }),
  // },
}))`
  /* padding: ${({ theme }) => `${theme.sizes[0]} ${theme.sizes[1]}`}; */
  padding-top: 0px;
`;

export const ActivityIndicatorView = styled(ActivityIndicator)`
  height: 100%;
  width: 100%;
`;
