import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { View, Dimensions } from "react-native";
import { headerstyles } from "../ChatList/Styles/HeaderStyle";
import { connect } from "react-redux";
import { heightOfHeader } from "../ChatList/Constants/ConstantsForChatlist";
interface HeaderContainerProps {
  children?: ReactNode | null;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const HeaderContainer: React.FC<HeaderContainerProps> = ({
  children = null,
}) => {
  return (
    <View
      style={[
        {
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: 5,
          elevation: 0.001,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          height: heightOfHeader,
          justifyContent: "flex-end",
          overflow: "hidden",
        },
      ]}
    >
      <View style={headerstyles.container}>
        <LinearGradient
          colors={["#cf9b95", "#c98bb8", "#c37adb"]}
          locations={[0.25, 0.5, 0.75]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            opacity: 0.7,
            top: 0,
            position: "absolute",
            left: 0,
            right: 0,
            height: screenHeight,
            width: screenWidth,
          }}
        />
        {children}
      </View>
    </View>
  );
};
export default connect(null)(HeaderContainer);
