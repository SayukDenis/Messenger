import React from "react";
import { TouchableOpacity } from "react-native";
import BranchesSVG from "../../../../../SVG/BranchesSVG";
import { listOfChatsStyle } from "../../../../../../Styles/ListOfChatsStyle";

export function BranchesButton({ onBranchPress }: any) {
  return (
    <TouchableOpacity
      onPress={onBranchPress}
      style={listOfChatsStyle.branchesButton}
    >
      <BranchesSVG />
    </TouchableOpacity>
  );
}
