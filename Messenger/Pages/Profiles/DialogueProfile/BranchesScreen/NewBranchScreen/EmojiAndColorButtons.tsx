// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "../../../SemiComponents/ProfileStyles";

interface EmojiAndColorButtonsProps {
  isVisible: boolean;
  onEmojiClick: () => void;
  onColorClick: () => void;
}

const EmojiAndColorButtons: React.FC<EmojiAndColorButtonsProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <View
          style={[
            styles.containerForSettingTitle,
            {
              flexDirection: "column",
              justifyContent: "flex-start",
            },
          ]}
        >
          {/* Select emoji button */}
          <TouchableOpacity
            onPress={() => {
              props.onEmojiClick();
            }}
          >
            <View style={styles.pickEmojiButtonContainer}>
              <Text style={styles.pickEmojiButtonText}>😀</Text>
            </View>
          </TouchableOpacity>

          {/* Select color button */}
          <TouchableOpacity
            onPress={() => {
              props.onColorClick();
            }}
          >
            <View
              style={[
                styles.pickEmojiButtonContainer,
                { left: 0.77 * Dimensions.get("screen").width },
              ]}
            >
              <Text style={styles.pickColorButtonText}>🎨</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default EmojiAndColorButtons;
