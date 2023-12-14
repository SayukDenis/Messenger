// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "../MainScreen/Styles";
import GoBackButton from "../GoBackButton";
import ElseFeaturesIcon from "../MainScreen/Icons/ElseFeaturesIcon";

const screenHeight = Dimensions.get("screen").height;

interface PhotoToolBarProps {
  onGoBackPress: () => void;
  onElseFeaturesPress: () => void;
  title: string;
}

const PhotoToolBar: React.FC<PhotoToolBarProps> = (props) => {
  return (
    <View style={styles.photoToolBar}>
      <GoBackButton
        onPress={() => {
          props.onGoBackPress();
        }}
      />

      <Text style={[styles.profileTitle, { top: 0.014 * screenHeight }]}>
        {props.title}
      </Text>

      {/* Else features button */}
      <TouchableOpacity
        onPress={() => {
          props.onElseFeaturesPress();
        }}
        style={styles.elseFeaturesButton}
      >
        <ElseFeaturesIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PhotoToolBar;
