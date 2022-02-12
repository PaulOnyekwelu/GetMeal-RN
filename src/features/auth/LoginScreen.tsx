import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../services/authentication/context";
import { ActivityIndicator } from "react-native-paper";

type props = StackScreenProps<authParamList, "Login">;

const LoginScreen = ({ navigation }: props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, loginUser, error, setError } = useContext(AuthContext);

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
          {error !== null && !isLoading && (
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ color: "red" }}>{error}</Text>
            </View>
          )}
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <AuthButton
              icon="lock"
              mode="contained"
              onPress={() => loginUser(email, password)}
            >
              <AuthButtonText>Login</AuthButtonText>
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

export default LoginScreen;

const styles = StyleSheet.create({});
