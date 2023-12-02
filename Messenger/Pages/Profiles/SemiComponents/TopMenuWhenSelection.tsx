// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./MainScreen/Styles";
import GoBackButton from "./GoBackButton";
import SearchIcon from "./MainScreen/Icons/SearchIcon";
import ElseFeaturesIcon from "./MainScreen/Icons/ElseFeaturesIcon";
import Name from "./MainScreen/Name";

interface TopMenuWhenSelectionProps {
  isVisible: boolean;
  quantityOfSelectedItems: number;
  onDeleteAllPress: () => void;
  onCancelPress: () => void;
}

const TopMenuWhenSelection: React.FC<TopMenuWhenSelectionProps> = (props) => {
  const blockStatusTitle: string = "Blocked";
  return (
    <>
      {props.isVisible && (
        <>
          <View
            style={[styles.topToolBar, { position: "absolute", zIndex: 1 }]}
          >
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
