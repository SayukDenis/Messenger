// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "./Styles";
import BinIcon from "./Icons/BinIcon";
import ArrowEastIcon from "./Icons/ArrowEastIcon";

interface BottomToolBarProps {
  isVisible: boolean;
  onDeletePress: () => void;
  onForwardPress: () => void;
}

const BottomToolBar: React.FC<BottomToolBarProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <View style={styles.bottomToolBar}>
          {/* Delete button */}
          <TouchableOpacity
            style={{ left: 0.07 * Dimensions.get("screen").width }}
            onPress={() => {
              props.onDeletePress();
            }}
          >
            <BinIcon style={styles.binIcon} />
          </TouchableOpacity>

          {/* Forward button */}
          <TouchableOpacity
            style={{ left: 0.79 * Dimensions.get("screen").width }}
            onPress={() => {
              props.onForwardPress();
            }}
          >
            <ArrowEastIcon style={styles.arrowEastIcon} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default BottomToolBar;
