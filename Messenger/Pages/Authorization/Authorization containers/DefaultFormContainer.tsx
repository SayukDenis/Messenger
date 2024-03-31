import React, { ReactNode } from "react";
import { View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../ChatList/Constants/ConstantsForChatlist";

interface DefaultFormContainerProps {
  children?: ReactNode;
  borderTop?: boolean;
}

const DefaultFormContainer: React.FC<DefaultFormContainerProps> = ({
  children,
  borderTop = false,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: screenWidth * 0.8,
        height: screenHeight * 0.05,
        alignSelf: "center",
        borderTopWidth: borderTop ? 1 : 0,
        borderBottomWidth: 1,
        borderColor: "white",
      }}
    >
      {children}
    </View>
  );
};
export default DefaultFormContainer;
