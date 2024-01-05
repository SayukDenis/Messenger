// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import ForwardContactIcon from "../../SemiComponents/MainScreen/Icons/ForwardContactIcon";
import AddNewImageIcon from "../../SemiComponents/MainScreen/Icons/AddNewImageIcon";
import SortIcon from "../../SemiComponents/MainScreen/Icons/SortIcon";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";

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
            style={styles.additionalFeatureButton}
          >
            <ForwardContactIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Forward</Text>
          </TouchableOpacity>

          {/* Add photo button */}
          <TouchableOpacity
            onPress={() => {
              props.onAddPhotoPress();
            }}
            style={styles.additionalFeatureButton}
          >
            <AddNewImageIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Add photo</Text>
          </TouchableOpacity>

          {/* Sort button */}
          <TouchableOpacity
            onPress={() => {
              props.onSortPress();
            }}
            style={styles.additionalFeatureButton}
          >
            <SortIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Sort</Text>
          </TouchableOpacity>

          {/* Delete button */}
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

export default AlbumElseFeaturesButtons;
