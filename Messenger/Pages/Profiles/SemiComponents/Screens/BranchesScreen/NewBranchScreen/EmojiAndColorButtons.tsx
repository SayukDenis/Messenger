// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "../Styles";
import { LinearGradient } from "expo-linear-gradient";

interface EmojiAndColorButtonsProps {
  isVisible: boolean;
  onEmojiPress: () => void;
  onColorPress: () => void;
}

const EmojiAndColorButtons: React.FC<EmojiAndColorButtonsProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <View
          style={[
            styles.emojiAndColorButtonsContainer,
            {
              flexDirection: "column",
              justifyContent: "flex-start",
            },
          ]}
        >
          {/* Select emoji button */}
          <TouchableOpacity
            onPress={() => {
              props.onEmojiPress();
            }}
          >
            <View style={styles.pickEmojiButtonContainer}>
              <LinearGradient
                colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                style={[styles.linearGradient, { opacity: 0.7 }]}
              />
              <Text style={styles.pickEmojiButtonText}>😀</Text>
            </View>
          </TouchableOpacity>

          {/* Select color button */}
          <TouchableOpacity
            onPress={() => {
              props.onColorPress();
            }}
          >
            <View
              style={[
                styles.pickEmojiButtonContainer,
                { left: 0.77 * Dimensions.get("screen").width },
              ]}
            >
              <LinearGradient
                colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                style={[styles.linearGradient, { opacity: 0.7 }]}
              />
              <Text style={styles.pickColorButtonText}>🎨</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default EmojiAndColorButtons;
