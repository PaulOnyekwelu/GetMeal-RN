import { StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import { Avatar, List } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { settingsParamList } from "../../infras/navigations/settings";
import { AuthContext } from "../../services/authentication/context";
import { CustomSafeAreaView, PaddedView } from "../styles";
import { AvatarWrapper } from "./settingStyle";

type props = StackScreenProps<settingsParamList, "Setting">;

const SettingsScreen = ({ navigation }: props) => {
  const { logOutUser, user } = useContext(AuthContext);
  return (
    <CustomSafeAreaView>
      <AvatarWrapper>
        <Avatar.Icon size={150} icon="face-profile" />
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

const styles = StyleSheet.create({});
