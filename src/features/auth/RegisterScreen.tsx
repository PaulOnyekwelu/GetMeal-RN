import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  AuthButton,
  FormSection,
  AuthScreenWrapper,
  CustomImageBackground,
  CustomTextInput,
  AuthButtonText,
} from "./AuthStyle";
import { authParamList } from "../../infras/navigations/auth";

type props = StackScreenProps<authParamList, "Register">;

const RegisterScreen = ({ navigation }: props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
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
          <CustomTextInput
            placeholder="Repeat Password"
            textContentType="password"
            keyboardType="visible-password"
            autoComplete={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"
            value={repeatPassword}
            onChangeText={(text: string) => setRepeatPassword(text)}
            secureTextEntry
          />
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => console.log("")}
          >
            <AuthButtonText>Register</AuthButtonText>
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

export default RegisterScreen;

const styles = StyleSheet.create({});
