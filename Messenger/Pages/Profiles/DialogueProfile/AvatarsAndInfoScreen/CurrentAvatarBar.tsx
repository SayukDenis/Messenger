// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./Styles";
import { user } from "../../SemiComponents/DatabaseSimulation/DBUser";
import { PhotoOrVideo } from "../../SemiComponents/DatabaseSimulation/DBClasses";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

interface CurrentAvatarBarProps {
  currentAvatar: PhotoOrVideo;
}

const CurrentAvatarBar: React.FC<CurrentAvatarBarProps> = (props) => {
  return (
    <>
      {user.avatars.length > 1 && (
        <View style={styles.currentAvatarBarMainContainer}>
          {user.avatars.map((avatar, index) => (
            <View
              key={index}
              style={[
                styles.avatarBarElement,
                {
                  width: (0.68 * screenWidth) / user.avatars.length,
                  backgroundColor:
                    props.currentAvatar == avatar
                      ? "white"
                      : "rgb(161, 156, 145)",

                  left: ((0.7 * screenWidth) / user.avatars.length) * index,
                },
              ]}
            />
          ))}
        </View>
      )}
    </>
  );
};

export default CurrentAvatarBar;
