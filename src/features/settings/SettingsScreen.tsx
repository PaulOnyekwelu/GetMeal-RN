import { Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Avatar, List } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { settingsParamList } from "../../infras/navigations/settings";
import { AuthContext } from "../../services/authentication/context";
import { CustomSafeAreaView, PaddedView } from "../styles";
import { AvatarWrapper } from "./settingStyle";

type props = StackScreenProps<settingsParamList, "Setting">;

const SettingsScreen = ({ navigation }: props) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const { logOutUser, user } = useContext(AuthContext);



  useFocusEffect(() => {
    (async () => {
      try {
        const uri = await AsyncStorage.getItem(`${user?.uid}-photo`);
        if (uri) setPhotoUri(uri);
      } catch (error) {}
    })();
  });

  return (
    <CustomSafeAreaView>
      <AvatarWrapper>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photoUri ? (
            <Avatar.Image size={170} source={{ uri: photoUri }} />
          ) : (
            <Avatar.Icon size={170} icon="face-profile" />
          )}
        </TouchableOpacity>
        <PaddedView>
          <Text>{user?.email}</Text>
        </PaddedView>
      </AvatarWrapper>
      <List.Section>
        <List.Item
          title="Favourites"
          left={() => <List.Icon color="red" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          title="Logout"
          left={() => <List.Icon color="#000" icon="logout" />}
          onPress={logOutUser}
        />
      </List.Section>
    </CustomSafeAreaView>
  );
};

export default SettingsScreen;
