// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "./Styles";
import PhoneIcon from "./Icons/PhoneIcon";
import VideoCameraIcon from "./Icons/VideoCameraIcon";

interface AvatarWithCallingButtonsProps {
  onAvatarPress: () => void;
}

const AvatarWithCallingButtons: React.FC<AvatarWithCallingButtonsProps> = (
  props
) => {
  const avatarURL: string = "https://picsum.photos/id/1084/536/354";

  return (
    <View>
      {/* Touchable avatar image */}
      <TouchableOpacity
        onPress={() => {
          props.onAvatarPress();
        }}
        style={styles.mainAvatarImage}
      >
        <Image style={styles.mainAvatarImage} source={{ uri: avatarURL }} />
      </TouchableOpacity>

      {/* Phone button */}
      <View style={styles.horizontalContainerForCalling}>
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
