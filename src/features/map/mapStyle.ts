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