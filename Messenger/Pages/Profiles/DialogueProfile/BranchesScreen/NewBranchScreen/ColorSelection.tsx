// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../../../SemiComponents/ProfileStyles";
import CrossIcon from "../Icons/CrossIcon";
import ColorList from "./ColorList";

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
                <CrossIcon style={styles.crossIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.emojiSelectionContainer}>
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
