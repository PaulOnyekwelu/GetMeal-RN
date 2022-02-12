import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  AuthButton,
  AuthButtonText,
  AuthScreenWrapper,
  CustomImageBackground,
  CustomTextInput,
  FormSection,
} from "./AuthStyle";
import { authParamList } from "../../infras/navigations/auth";

type props = StackScreenProps<authParamList, "Login">;

const LoginScreen = ({ navigation }: props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <CustomImageBackground>
      <AuthScreenWrapper>
        <FormSection>
          <CustomTextInput
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoComplete={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
          <CustomTextInput
            placeholder="Password"
            textContentType="password"
            keyboardType="visible-password"
            autoComplete={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry
          />
          <AuthButton
            icon="lock"
            mode="contained"
            onPress={() => console.log("")}
          >
            <AuthButtonText>Login</AuthButtonText>
          </AuthButton>
        </FormSection>
        <View style={{ paddingTop: 16 }} />
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          <AuthButtonText>Back</AuthButtonText>
        </AuthButton>
      </AuthScreenWrapper>
    </CustomImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
