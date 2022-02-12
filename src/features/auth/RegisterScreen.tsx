import { StyleSheet, View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";
import {
  AuthButton,
  FormSection,
  AuthScreenWrapper,
  CustomImageBackground,
  CustomTextInput,
  AuthButtonText,
} from "./AuthStyle";
import { authParamList } from "../../infras/navigations/auth";
import { AuthContext } from "../../services/authentication/context";

type props = StackScreenProps<authParamList, "Register">;

const RegisterScreen = ({ navigation }: props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { isLoading, error, registerUser, setError } = useContext(AuthContext);

  const goBack = () => {
    if (setError) setError(null);
    navigation.goBack();
  };

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
          {error !== null && !isLoading && (
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ color: "red" }}>{error}</Text>
            </View>
          )}
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => registerUser(email, password, repeatPassword)}
            >
              <AuthButtonText>Register</AuthButtonText>
            </AuthButton>
          )}
        </FormSection>
        <View style={{ paddingTop: 16 }} />
        <AuthButton mode="contained" onPress={goBack}>
          <AuthButtonText>Back</AuthButtonText>
        </AuthButton>
      </AuthScreenWrapper>
    </CustomImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
