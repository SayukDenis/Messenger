import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  screenHeight,
  screenWidth,
} from "../../../Constants/ConstantsForChatlist";
interface BackgroundColorForBranchInChatListProps {
  nesting: number;
}

const BackgroundColorForBranchInChatList: React.FC<
  BackgroundColorForBranchInChatListProps
> = ({ nesting }) => {
  return (
    <View
      style={{
        backgroundColor: nesting == 0 ? null : `rgba(118,214,255,0.1)`,
        width: screenWidth,
        height: screenHeight * 0.08,
        position: "absolute",
        zIndex: -1,
      }}
    />
  );
};
export default connect(null)(BackgroundColorForBranchInChatList);
