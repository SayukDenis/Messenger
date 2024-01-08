// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./Styles";
import { PhotoOrVideo, user } from "../../SemiComponents/DBUser";
import Name from "../../SemiComponents/MainScreen/Name";
import GoBackButton from "../../SemiComponents/GeneralComponents/GoBackButton";

interface AvatarsNameAndGoBackButtonProps {
  onGoBackPress: () => void;
  currentAvatar: PhotoOrVideo;
  onRightPress: () => void;
  onLeftPress: () => void;
}

const AvatarsNameAndGoBackButton: React.FC<AvatarsNameAndGoBackButtonProps> = (
  props
) => {
  return (
    <View style={styles.avatarMainContainer}>
      <View
        style={{ zIndex: 2, justifyContent: "center", alignItems: "center" }}
      >
        {/* Running user's name */}
        <Name
          primaryTitle={user.profileName}
          style={styles.profileTitle}
          isBottomLineAbsent={true}
        />

        {/* Button to go back */}
        <View style={styles.goBackContainer}>
          <GoBackButton onPress={() => props.onGoBackPress()} fill="white" />
        </View>
      </View>

      {/* Avatar image */}
      <Image
        source={{ uri: props.currentAvatar.url }}
        style={styles.avatarImage}
      />

      {/* Opacity to check next avatar */}
      <TouchableWithoutFeedback
        onPress={() => {
          props.onRightPress();
        }}
      >
        <View style={styles.opacityToSeeNextPhoto}></View>
      </TouchableWithoutFeedback>

      {/* Big opacity to check previous avatar */}
      <TouchableWithoutFeedback
        onPress={() => {
          props.onLeftPress();
        }}
      >
        <View style={styles.opacityToSeePreviousPhoto}></View>
      </TouchableWithoutFeedback>

      {/* Small additional opacity to check previous avatar */}
      <TouchableWithoutFeedback
        onPress={() => {
          props.onLeftPress();
        }}
      >
        <View style={styles.additionalOpacityToSeePreviousPhoto}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AvatarsNameAndGoBackButton;
