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
          <TouchableOpacity
            onPress={() => {}}
            style={styles.additionalFeatureButton}
          >
            <ForwardContactIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Forward</Text>
          </TouchableOpacity>

          {/* Select button */}
          <TouchableOpacity
            onPress={() => {
              props.onSelectAlbumPress();
            }}
            style={styles.additionalFeatureButton}
          >
            <SelectIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Select</Text>
          </TouchableOpacity>

          {/* Delete album button */}
          <TouchableOpacity
            onPress={() => {
              props.onDeleteAlbumPress();
            }}
            style={styles.additionalFeatureButton}
          >
            <BinIcon style={styles.additionalFeatureIcon} />
            <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
              Delete an album
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AlbumLongPressedMenu;
