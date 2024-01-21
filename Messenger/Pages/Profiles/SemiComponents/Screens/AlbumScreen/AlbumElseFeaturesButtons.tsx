// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import ForwardContactIcon from "../MainScreen/Icons/ForwardContactIcon";
import AddNewImageIcon from "../MainScreen/Icons/AddNewImageIcon";
import SortIcon from "../MainScreen/Icons/SortIcon";
import BinIcon from "../MainScreen/Icons/BinIcon";

interface AlbumElseFeaturesButtonsProps {
  isVisible: boolean;
  onForwardPress: () => void;
  onAddPhotoPress: () => void;
  onSortPress: () => void;
  onDeleteAlbumPress: () => void;
}

const AlbumElseFeaturesButtons: React.FC<AlbumElseFeaturesButtonsProps> = (
  props
) => {
  return (
    <>
      {props.isVisible && (
        <View style={styles.elseFeaturesButtonsContainer}>
          {/* Forward button */}
          <TouchableOpacity
            onPress={() => {
              props.onForwardPress();
            }}
            style={styles.elseFeatureButton}
          >
            <ForwardContactIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Forward</Text>
          </TouchableOpacity>

          {/* Add photo button */}
          <TouchableOpacity
            onPress={() => {
              props.onAddPhotoPress();
            }}
            style={styles.elseFeatureButton}
          >
            <AddNewImageIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Add photo</Text>
          </TouchableOpacity>

          {/* Sort button */}
          <TouchableOpacity
            onPress={() => {
              props.onSortPress();
            }}
            style={styles.elseFeatureButton}
          >
            <SortIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Sort</Text>
          </TouchableOpacity>

          {/* Delete button */}
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

export default AlbumElseFeaturesButtons;
