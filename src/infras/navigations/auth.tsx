import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../../features/auth/AuthScreen";
import LoginScreen from "../../features/auth/LoginScreen";
import RegisterScreen from "../../features/auth/RegisterScreen";

export type authParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
};

const AuthStack = createStackNavigator<authParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
