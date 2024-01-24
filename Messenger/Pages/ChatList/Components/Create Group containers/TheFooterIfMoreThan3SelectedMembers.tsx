import React from "react";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import { View } from "react-native";
import BackGroundColorForComponents from "../../../SemiComponents/BackGroundColorForComponents";
import DownArrowForListOfSelectedMembersSVG from "./DownArrowForListOfSelectedMembersSVG";

interface TheFooterIfMoreThan3SelectedMembersProps {
    isOpen:boolean
}

const TheFooterIfMoreThan3SelectedMembers: React.FC<
  TheFooterIfMoreThan3SelectedMembersProps
> = ({isOpen}) => {
  const height = screenHeight * 0.024;
  const width = screenWidth * 0.94;
  const borderBottomRadius = 20;
  const borderTopRadius = 2;
  return (
    <View
      style={{
        overflow: "hidden",
        height,
        width,
        alignSelf: "center",
        borderBottomLeftRadius: borderBottomRadius,
        borderBottomRightRadius: borderBottomRadius,
        borderTopRightRadius: borderTopRadius,
        borderTopLeftRadius: borderTopRadius,
        justifyContent: "center",
      }}
    >
      <View style={{ alignSelf: "center",transform: [{ scaleY: isOpen?-1:1 }] }}>
        <DownArrowForListOfSelectedMembersSVG width={screenWidth * 0.035} />
      </View>
      <BackGroundColorForComponents height={height} width={width} />
    </View>
  );
};

export default TheFooterIfMoreThan3SelectedMembers;
