import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const CustomSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const PaddedView = styled(View).attrs((props) => ({
  $direction: "both",
  ...props,
}))`
  padding: ${({ theme, $direction }) =>
    $direction === "horizontal"
      ? `0px ${theme.sizes[1]}`
      : $direction === "vertical"
      ? `${theme.sizes[1]} 0px`
      : theme.sizes[1]};
`;

export const PaddedNoTopView = styled(PaddedView).attrs({
  $direction: "horizontal",
})`
  padding-bottom: ${({ theme }) => theme.sizes[1]};
`;

export const RestaurantListView = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${({ theme }) => theme.sizes[1]};
`;

export const StyledCardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.sizes[1]};
`;

export const StyledTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const StyledParagraph = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.ui.secondary};
`;
