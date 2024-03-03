import { BranchesButton } from "./BranchesButtonComponents/BranchesButton";
import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { listOfChatsStyle } from "../../../../../Styles/ListOfChatsStyle";
interface BranchesButtonContainerProps {
  onBranchPress: () => void;
  isBranches: boolean;
}

const BranchesButtonContainer: React.FC<BranchesButtonContainerProps> = ({
  onBranchPress,
  isBranches,
}) => {
  return (
    <View style={listOfChatsStyle.branchesButtonContainer}>
      {isBranches && <BranchesButton onBranchPress={onBranchPress} />}
    </View>
  );
};
export default connect(null)(BranchesButtonContainer);
