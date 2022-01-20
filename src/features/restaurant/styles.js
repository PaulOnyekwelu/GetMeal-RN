import { SafeAreaView, StatusBar, View } from "react-native";
import styled from "styled-components";

export const CustomSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const PaddedView = styled(View)`
  padding: ${({theme}) => theme.sizes[1]};
`;

export const RestaurantListView = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${({theme}) => theme.sizes[1]}
`;
