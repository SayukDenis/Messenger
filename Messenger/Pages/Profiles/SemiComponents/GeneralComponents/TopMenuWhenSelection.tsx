// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import { LinearGradient } from "expo-linear-gradient";

interface TopMenuWhenSelectionProps {
  isVisible: boolean;
  quantityOfSelectedItems: number;
  onDeleteAllPress: () => void;
  onCancelPress: () => void;
}

const TopMenuWhenSelection: React.FC<TopMenuWhenSelectionProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <>
          <View
            style={[styles.topToolBar, { position: "absolute", zIndex: 1 }]}
          >
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              style={[
                styles.linearGradient,
                {
                  opacity: 0.7,
                },
              ]}
            />
            {/* Delete all button */}
            <TouchableOpacity
              style={[
                styles.doneButtonContainer,
                { left: 0.06 * Dimensions.get("screen").width },
              ]}
              onPress={() => {
                props.onDeleteAllPress();
              }}
            >
              <Text style={[styles.doneButtonTitle, { color: "red" }]}>
                Delete all
              </Text>
            </TouchableOpacity>

            {/* Number of selected albums */}
            <View
              style={[
                styles.doneButtonContainer,
                { left: 0.4 * Dimensions.get("screen").width },
              ]}
            >
              <Text style={styles.doneButtonTitle}>
                Select({props.quantityOfSelectedItems})
              </Text>
            </View>

            {/* Cancel button */}
            <TouchableOpacity
              style={[
                styles.doneButtonContainer,
                { right: -0.075 * Dimensions.get("screen").width },
              ]}
              onPress={() => {
                props.onCancelPress();
              }}
            >
              <Text style={styles.doneButtonTitle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default TopMenuWhenSelection;
