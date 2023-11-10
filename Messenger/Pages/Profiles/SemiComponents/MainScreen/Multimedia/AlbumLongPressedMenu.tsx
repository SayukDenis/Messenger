// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Album, user } from "../../DBUser";
import styles from "../Styles";
import DownArrowIcon from "../Icons/DownArrowIcon";
import ForwardContactIcon from "../Icons/ForwardContactIcon";

const screenWidth = Dimensions.get("screen").width;

interface AlbumLongPressedMenuProps {
  isVisible: boolean;
  longPressedAlbum: Album;
}

const AlbumLongPressedMenu: React.FC<AlbumLongPressedMenuProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <View
          style={[
            styles.elseFeaturesButtonsContainer,
            {
              left:
                user.albums.indexOf(props.longPressedAlbum) % 2 == 1
                  ? 0.425 * screenWidth
                  : 0.075 * screenWidth,
            },
          ]}
        >
          {/* Settings button */}
          <TouchableOpacity
            onPress={() => {}}
            style={styles.additionalFeatureButton}
          >
            <ForwardContactIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Forward</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AlbumLongPressedMenu;
