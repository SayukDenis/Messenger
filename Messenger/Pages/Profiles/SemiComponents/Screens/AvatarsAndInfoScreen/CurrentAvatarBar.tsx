// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./Styles";
import { PhotoOrVideo } from "../../DatabaseSimulation/DBClasses";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

interface CurrentAvatarBarProps {
  currentAvatar: PhotoOrVideo;
}

const CurrentAvatarBar: React.FC<CurrentAvatarBarProps> = (props) => {
  return (
    <>
      {GetProfile().avatars.length > 1 && (
        <View style={styles.currentAvatarBarMainContainer}>
          {GetProfile().avatars.map((avatar, index) => (
            <View
              key={index}
              style={[
                styles.avatarBarElement,
                {
                  width: (0.68 * screenWidth) / GetProfile().avatars.length,
                  backgroundColor:
                    props.currentAvatar == avatar
                      ? "white"
                      : "rgb(161, 156, 145)",

                  left:
                    ((0.7 * screenWidth) / GetProfile().avatars.length) * index,
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
