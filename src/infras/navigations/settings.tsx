import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/SettingsScreen";
import FavouritesScreen from "../../features/settings/FavouritesScreen";

export type settingsParamList = {
  Setting: undefined;
  Favourites: undefined;
};

const SettingsStack = createStackNavigator<settingsParamList>();

const settingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Setting" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};

export default settingsNavigator;
