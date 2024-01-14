// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "../Styles";
import CrossIcon from "../Icons/CrossIcon";
import ColorList from "./ColorList";
import { LinearGradient } from "expo-linear-gradient";

interface ColorSelectionProps {
  isVisible: boolean;
  onColorPress: (value: string) => void;
  onClosePress: () => void;
  pickedColor: string;
  pickedSpecialColor: string;
  onSpecialColorPress: () => void;
}

const ColorSelection: React.FC<ColorSelectionProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <>
          <View style={styles.closeEmojiSelectionButtonContainer}>
            {/* Close emoji selection button */}
            <TouchableOpacity
              onPress={() => {
                props.onClosePress();
              }}
            >
              <View style={styles.closeEmojiSelectionButton}>
                <LinearGradient
                  colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                  style={[styles.linearGradient, { opacity: 0.7 }]}
                />
                <CrossIcon style={styles.crossIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.emojiSelectionContainer,
              { height: Dimensions.get("screen").height * 0.2 },
            ]}
          >
            <ColorList
              onSpecialColorPress={props.onSpecialColorPress}
              pickedColor={props.pickedColor}
              onColorPress={props.onColorPress}
              pickedSpecialColor={props.pickedSpecialColor}
            />
          </View>
        </>
      )}
    </>
  );
};

export default ColorSelection;
