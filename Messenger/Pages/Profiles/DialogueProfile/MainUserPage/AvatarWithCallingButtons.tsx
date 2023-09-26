//Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import { styles } from "./Styles";
import PhoneIcon from "./Icons/PhoneIcon.tsx";
import VideoCameraIcon from "./Icons/VideoCameraIcon.tsx";

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
          <View style={styles.phone}>
            <PhoneIcon />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            alert("Calling (with camera)...");
          }}
        >
          <View style={styles.videoCamera}>
            <VideoCameraIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AvatarWithCallingButtons;
