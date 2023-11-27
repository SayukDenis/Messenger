// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Image } from "react-native";
import { styles } from "./Styles";
import { PhotoOrVideo, user } from "../../SemiComponents/DBUser";
import Name from "../../SemiComponents/MainScreen/Name";
import GoBackButton from "../../SemiComponents/GoBackButton";

interface AvatarsNameAndGoBackButtonProps {
  onGoBackPress: () => void;
  currentAvatar: PhotoOrVideo;
}

const AvatarsNameAndGoBackButton: React.FC<AvatarsNameAndGoBackButtonProps> = (
  props
) => {
  return (
    <View style={styles.avatarMainContainer}>
      <View style={{ zIndex: 2 }}>
        <Name
          primaryTitle={user.profileName}
          style={styles.profileTitle}
          isBottomLineAbsent={true}
        />

        <View style={styles.goBackContainer}>
          <GoBackButton onPress={() => props.onGoBackPress()} fill="white" />
        </View>
      </View>

      <Image
        source={{ uri: props.currentAvatar.url }}
        style={styles.avatarImage}
      />
    </View>
  );
};

export default AvatarsNameAndGoBackButton;
