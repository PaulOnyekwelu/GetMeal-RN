import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/SettingsScreen";
import FavouritesScreen from "../../features/settings/FavouritesScreen";
import CameraScreen from "../../features/settings/CameraScreen";

export type settingsParamList = {
  Setting: undefined;
  Favourites: undefined;
  Camera: undefined;
};

const SettingsStack = createStackNavigator<settingsParamList>();

const settingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Setting"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default settingsNavigator;
