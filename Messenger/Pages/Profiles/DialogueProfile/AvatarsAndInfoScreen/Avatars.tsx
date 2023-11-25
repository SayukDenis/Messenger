// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "./Styles";
import { user } from "../../SemiComponents/DBUser";
import Name from "../../SemiComponents/MainScreen/Name";
import GoBackButton from "../../SemiComponents/GoBackButton";

interface AvatarsProps {
  onGoBackPress: () => void;
}

const Avatars: React.FC<AvatarsProps> = (props) => {
  const [currentImage, setCurrentImage] = useState(user.avatars[0]);

  useEffect(() => {
    console.log(currentImage.url);
  });
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

      <Image source={{ uri: currentImage.url }} style={styles.avatarImage} />
    </View>
  );
};

export default Avatars;
