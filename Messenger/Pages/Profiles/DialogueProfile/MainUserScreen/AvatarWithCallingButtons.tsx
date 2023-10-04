// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles.tsx";
import PhoneIcon from "../../SemiComponents/MainScreen/Icons/PhoneIcon.tsx";
import VideoCameraIcon from "../../SemiComponents/MainScreen/Icons/VideoCameraIcon.tsx";

interface AvatarWithCallingButtonsProps {}

const AvatarWithCallingButtons: React.FC<AvatarWithCallingButtonsProps> = (
  props
) => {
  const avatarURL: string = "https://picsum.photos/id/1084/536/354";

  return (
    <View>
      {/* Touchable avatar image */}
      <TouchableWithoutFeedback
        onPress={() => {
          alert("avatar press");
        }}
      >
        <Image style={styles.mainAvatarImage} source={{ uri: avatarURL }} />
      </TouchableWithoutFeedback>

      {/* Phone button */}
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

        {/* Videocamera button */}
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
