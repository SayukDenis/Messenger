// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Album } from "../../../DatabaseSimulation/DBClasses";
import styles from "../Styles";
import ForwardContactIcon from "../Icons/ForwardContactIcon";
import SelectIcon from "../Icons/SelectIcon";
import BinIcon from "../Icons/BinIcon";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

interface AlbumLongPressedMenuProps {
  isVisible: boolean;
  longPressedAlbum: Album;
  positionYOfLongPressedAlbum: number;
  onDeleteAlbumPress: () => void;
  onSelectAlbumPress: () => void;
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
                GetProfile().albums.indexOf(props.longPressedAlbum) % 2 == 1
                  ? 0.425 * screenWidth
                  : 0.075 * screenWidth,
              top:
                props.positionYOfLongPressedAlbum > screenHeight * 0.8
                  ? props.positionYOfLongPressedAlbum - 0.3 * screenHeight
                  : props.positionYOfLongPressedAlbum,
            },
          ]}
        >
          {/* Settings button */}
          <TouchableOpacity onPress={() => {}} style={styles.elseFeatureButton}>
            <ForwardContactIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Forward</Text>
          </TouchableOpacity>

          {/* Select button */}
          <TouchableOpacity
            onPress={() => {
              props.onSelectAlbumPress();
            }}
            style={styles.elseFeatureButton}
          >
            <SelectIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Select</Text>
          </TouchableOpacity>

          {/* Delete album button */}
          <TouchableOpacity
            onPress={() => {
              props.onDeleteAlbumPress();
            }}
            style={styles.elseFeatureButton}
          >
            <BinIcon style={styles.elseFeatureIcon} />
            <Text style={[styles.elseFeatureTitle, { color: "red" }]}>
              Delete an album
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AlbumLongPressedMenu;
