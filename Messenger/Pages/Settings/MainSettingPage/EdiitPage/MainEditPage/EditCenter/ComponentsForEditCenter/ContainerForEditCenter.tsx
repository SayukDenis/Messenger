import React from "react";
import { View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../../ChatList/Constants/ConstantsForChatlist";
import BackGroundColorForComponents from "../../../../../../SemiComponents/BackGroundColorForComponents";

interface ContainerForEditCenter {
  children?: React.ReactNode;
}

const ContainerForEditCenter: React.FC<
ContainerForEditCenter
> = ({ children }) => {
  const heightOfContainer = screenHeight * 0.06;
  const widthOfContainer = screenWidth * 0.94;
  return (
    <View
      style={{
        height: heightOfContainer,
        width: widthOfContainer,
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row",
        overflow: "hidden",
        alignItems:"center",
        justifyContent: "space-between",
        marginBottom:"0.4%"
      }}
    >
      {children}
      <BackGroundColorForComponents
        height={heightOfContainer}
        width={widthOfContainer}
      />
    </View>
  );
};

export default ContainerForEditCenter;