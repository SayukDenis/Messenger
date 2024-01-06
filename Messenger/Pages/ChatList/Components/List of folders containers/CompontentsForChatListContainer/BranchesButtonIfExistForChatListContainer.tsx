import { BranchButtonForCentralChatContainer } from "./BranchButtonForCentralChatContainer";
import React from "react";
import { View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../../Constants/ConstantsForChatlist";
import { connect } from "react-redux";
interface BranchesButtonProps {
  onBranchPress: () => void;
  moreThan0Branches: boolean;
}

const BranchesButtonIfExistForChatListContainer: React.FC<
  BranchesButtonProps
> = ({ onBranchPress, moreThan0Branches }) => {
  return (
    <View
      style={{
        width: screenWidth * 0.15,
        height: screenHeight * 0.045,
        justifyContent: "center",
      }}
    >
      {moreThan0Branches && (
        <BranchButtonForCentralChatContainer onBranchPress={onBranchPress} />
      )}
    </View>
  );
};
export default connect(null)(BranchesButtonIfExistForChatListContainer);
