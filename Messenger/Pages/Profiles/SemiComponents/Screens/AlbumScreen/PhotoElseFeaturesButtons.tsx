// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import ForwardContactIcon from "../MainScreen/Icons/ForwardContactIcon";
import BinIcon from "../MainScreen/Icons/BinIcon";
import SelectIcon from "../MainScreen/Icons/SelectIcon";
import CopyIcon from "../MainScreen/Icons/CopyIcon";
import StarIcon from "../MainScreen/Icons/StarIcon";

interface PhotoElseFeaturesButtonsProps {
  isVisible: boolean;
  setIsNotVisible: () => void;
  onCopyPress: () => void;
  onForwardPress: () => void;
  onSelectPress: () => void;
  onMakeMainPhotoPress: () => void;
  onDeletePress: () => void;
}

const PhotoElseFeaturesButtons: React.FC<PhotoElseFeaturesButtonsProps> = (
  props
) => {
  return (
    <>
      {props.isVisible && (
        <View style={styles.photoElseFeaturesButtonsContainer}>
          {/* Copy button */}
          <TouchableOpacity
            onPress={() => {
              props.onCopyPress();
            }}
            style={styles.elseFeatureButton}
          >
            <CopyIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Copy</Text>
          </TouchableOpacity>

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

          {/* Select button */}
          <TouchableOpacity
            onPress={() => {
              props.setIsNotVisible();
              props.onSelectPress();
            }}
            style={styles.elseFeatureButton}
          >
            <SelectIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Select</Text>
          </TouchableOpacity>

          {/* Make main photo button */}
          <TouchableOpacity
            onPress={() => {
              props.setIsNotVisible();
              props.onMakeMainPhotoPress();
            }}
            style={styles.elseFeatureButton}
          >
            <StarIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Make the main photo</Text>
          </TouchableOpacity>

          {/* Delete button */}
          <TouchableOpacity
            onPress={() => {
              props.setIsNotVisible();
              props.onDeletePress();
            }}
            style={styles.elseFeatureButton}
          >
            <BinIcon style={styles.elseFeatureIcon} />
            <Text style={[styles.elseFeatureTitle, { color: "red" }]}>
              Delete in album
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default PhotoElseFeaturesButtons;
