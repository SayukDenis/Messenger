// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "./Styles";
import PhoneIcon from "./Icons/PhoneIcon";
import VideoCameraIcon from "./Icons/VideoCameraIcon";

interface AvatarWithCallingButtonsProps {
  avatarURL: string;
  onAvatarPress: () => void;
}

const AvatarWithCallingButtons: React.FC<AvatarWithCallingButtonsProps> = (
  props
) => {
  return (
    <View>
      {/* Touchable avatar image */}
      <TouchableOpacity
        onPress={() => {
          props.onAvatarPress();
        }}
        style={styles.mainAvatarImage}
      >
        <Image
          style={styles.mainAvatarImage}
          source={{ uri: props.avatarURL }}
        />
      </TouchableOpacity>

      <View style={styles.horizontalContainerForCalling}>
        {/* Phone button */}
        <TouchableOpacity
          onPress={() => {
            alert("Calling (no camera)...");
          }}
          style={styles.phone}
        >
          <PhoneIcon />
        </TouchableOpacity>

        {/* Videocamera button */}
        <TouchableOpacity
          onPress={() => {
            alert("Calling (with camera)...");
          }}
          style={styles.videoCamera}
        >
          <VideoCameraIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AvatarWithCallingButtons;
