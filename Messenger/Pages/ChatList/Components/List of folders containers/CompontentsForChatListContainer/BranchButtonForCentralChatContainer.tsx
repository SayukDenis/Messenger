import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import BranchesSVG from "../../SVG/BranchesSVG";
import { screenHeight, screenWidth } from "../../../Constants/ConstantsForChatlist";
export function BranchButtonForCentralChatContainer({
  onBranchPress,

}) {
  return (
    <TouchableOpacity
      onPress={onBranchPress}
      style={{
        justifyContent: "center",
        flexDirection: "row",
        height: screenHeight * 0.045,
        width: screenWidth * 0.15,
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          height: screenHeight * 0.045,
          width: screenWidth * 0.15,
        }}
      >
        <BranchesSVG width={screenWidth} height={screenWidth} />
      </View>
    </TouchableOpacity>
  );
}
