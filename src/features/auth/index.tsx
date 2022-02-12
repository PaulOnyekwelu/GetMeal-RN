import { StyleSheet, View } from "react-native";
import React from "react";
import {
  AuthButton,
  AuthButtonText,
  AuthScreenWrapper,
  CustomImageBackground,
  FormSection,
} from "./AuthStyle";
import { StackScreenProps } from "@react-navigation/stack";
import { authParamList } from "../../infras/navigations/auth";
import AnimatedLottieView from "lottie-react-native";

type props = StackScreenProps<authParamList, "Auth">;

const AuthScreen = ({ navigation }: props) => {
  return (
    <CustomImageBackground>
      <AuthScreenWrapper>
          <AnimatedLottieView
            source={require("../../../assets/waterMelonAnimation.json")}
            style={{width: "100%", position: "absolute", top: 10}}
            autoPlay
            loop
          />
        <FormSection>
          <AuthButton
            icon="lock"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            <AuthButtonText>Login</AuthButtonText>
          </AuthButton>
          <View style={{ paddingTop: 20 }} />
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            <AuthButtonText>Register</AuthButtonText>
          </AuthButton>
        </FormSection>
      </AuthScreenWrapper>
    </CustomImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
