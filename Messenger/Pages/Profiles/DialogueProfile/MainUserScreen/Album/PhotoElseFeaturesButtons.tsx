// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../Styles";
import ForwardContactIcon from "../../../SemiComponents/MainScreen/Icons/ForwardContactIcon";
import BinIcon from "../../../SemiComponents/MainScreen/Icons/BinIcon";
import SelectIcon from "../../../SemiComponents/MainScreen/Icons/SelectIcon";
import CopyIcon from "../Icons/CopyIcon";
import StarIcon from "../Icons/StarIcon";

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
            style={styles.additionalFeatureButton}
          >
            <CopyIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Copy</Text>
          </TouchableOpacity>

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

          {/* Select button */}
          <TouchableOpacity
            onPress={() => {
              props.setIsNotVisible();
              props.onSelectPress();
            }}
            style={styles.additionalFeatureButton}
          >
            <SelectIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Select</Text>
          </TouchableOpacity>

          {/* Make main photo button */}
          <TouchableOpacity
            onPress={() => {
              props.setIsNotVisible();
              props.onMakeMainPhotoPress();
            }}
            style={styles.additionalFeatureButton}
          >
            <StarIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>
              Make the main photo
            </Text>
          </TouchableOpacity>

          {/* Delete button */}
          <TouchableOpacity
            onPress={() => {
              props.setIsNotVisible();
              props.onDeletePress();
            }}
            style={styles.additionalFeatureButton}
          >
            <BinIcon style={styles.additionalFeatureIcon} />
            <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
              Delete in album
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default PhotoElseFeaturesButtons;
