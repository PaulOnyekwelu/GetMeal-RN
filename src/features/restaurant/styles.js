import { SafeAreaView, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";

export const TextTitle = styled(Text)`
  color: black;
  font-size: 20px;
`;

export const CustomSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const PaddedView = styled(View)`
  padding: 10px;
`;

export const RestaurantListView = styled(View)`
  flex: 1;
  background-color: white;
  padding: 10px;
`;
