import { Camera } from "expo-camera";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { PaddedView } from "../styles";

export const AvatarWrapper = styled(PaddedView)`
  width: 100%;
  align-items: center;
`;

export const CustomCamera = styled(Camera)`
  height: 100%;
  width: 100%;
`;

export const TakePhotoButtonWrapper = styled(View)`
  position: absolute;
  bottom: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const TakePhotoButton = styled(TouchableOpacity)`
  height: 120px;
  width: 120px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 20px;
`;

export const TakePhotoText = styled(Text)`
  color: white;
  font-size: 16px;
`;
