import { Image, Text, View } from "react-native";
import MapView from "react-native-maps";
import WebView from "react-native-webview";
import styled from "styled-components";
import { PaddedView } from "../styles";

export const Map = styled(MapView)`
  height: 100%;
`;

export const StyledSearchView = styled(PaddedView)`
  position: absolute;
  top: 40px;
  z-index: 999;
  width: 90%;
  padding: 0px;
  margin: 5%;
`;

export const StyledCalloutView = styled(View)`
  width: 160px;
  height: 140px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  padding-top: 0px;
`;
export const CompactWebView = styled(WebView)`
  width: 150px;
  height: 100px;
  border-radius: 10px;
`;

export const CompactImage = styled(Image)`
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

export const StyledCalloutText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.ui.primary};
`;
