//Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import { styles } from "./Styles";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

interface AvatarWithCallingButtonsProps {
  AvatarURL: string;
}

const AvatarWithCallingButtons: React.FC<AvatarWithCallingButtonsProps> = (
  props
) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          alert("avatar press");
        }}
      >
        <Image
          style={styles.mainAvatarImage}
          source={{ uri: props.AvatarURL }}
        />
      </TouchableWithoutFeedback>
      <View style={styles.horizontalContainerForCalling}>
        <TouchableWithoutFeedback
          onPress={() => {
            alert("Calling (no camera)...");
          }}
        >
          <FontAwesome5 name="phone-alt" size={35} style={styles.phone} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            alert("Calling (with camera)...");
          }}
        >
          <FontAwesome
            name="video-camera"
            size={35}
            style={styles.videoCamera}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AvatarWithCallingButtons;
