import { ImageBackground, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";

export const CustomImageBackground = styled(ImageBackground).attrs({
  source: require("../../../assets/authScreen.jpg"),
})`
  width: 100%;
  height: 100%;
`;

export const AuthScreenWrapper = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: center;
  align-items: center;
`;

export const FormSection = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 320px;
  padding: ${({ theme }) => theme.sizes[2]};
`;

export const AuthButton = styled(Button)`
  padding: 8px 10px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const AuthButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.sizes[1]};
`;

export const CustomTextInput = styled(TextInput)`
  height: 50px;
  width: 250px;
  margin-bottom: 20px;
  border-bottom-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.brand.primary};
`;
