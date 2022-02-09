import { Image, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components";
import { PaddedView } from "../styles";

export const Map = styled(MapView)`
  height: 100%;
`;

export const StyledSearchView = styled(PaddedView)`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  position: absolute;
  top: 40px;
  z-index: 999;
  width: 90%;
  padding: 0px;
  margin: 5%;
`;

export const StyledCalloutView = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledCalloutImage = styled(Image)`
  width: 100%;
  height: 80%;
`;

export const StyledCalloutText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.ui.primary};
`;
