import { Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CustomCamera } from "./settingStyle";
import { AuthContext } from "../../services/authentication/context";
import { StackScreenProps } from "@react-navigation/stack";
import { settingsParamList } from "../../infras/navigations/settings";

type props = StackScreenProps<settingsParamList, "Camera">;

const CameraScreen = ({ navigation }: props) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera | null>();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {}
    })();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.current?.takePictureAsync();
        const uri = photo?.uri || "";
        await AsyncStorage.setItem(`${user?.uid}-photo`, uri);
        navigation.goBack();
      } catch (error) {}
    }
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <TouchableOpacity onPress={snap}>
      <CustomCamera
        ref={(cam) => (cameraRef.current = cam)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};

export default CameraScreen;
