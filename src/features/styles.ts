import { Image, SafeAreaView, StatusBar, View } from "react-native";
import styled from "styled-components";

export const CustomSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const PaddedView = styled(View).attrs((props) => ({
  $direction: "both",
}))`
  padding: ${({ theme, $direction }) =>
    $direction === "horizontal"
      ? `0px ${theme.sizes[1]}`
      : $direction === "vertical"
      ? `${theme.sizes[1]} 0px`
      : theme.sizes[1]};
`;

export const StyledRow = styled(View).attrs((props) => ({
  $justify: "center",
  $align: "center",
}))`
  flex-direction: row;
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
`;

export const StyledIcon = styled(Image)`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;
