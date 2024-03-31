import React from "react";
import { Platform, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import { footerstyles } from "../../Styles/FooterStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface FooterContainerProps {
  isTouchableForHeader: boolean;
  children: React.ReactNode;
}

const FooterContainer: React.FC<FooterContainerProps> = ({
  isTouchableForHeader,
  children,
}) => {
  return (
    <View
      style={[
        footerstyles.container,
        {
          height:
            footerstyles.container.height +
            (Platform.OS === "ios" ? useSafeAreaInsets().bottom : 0),
          paddingBottom: Platform.OS === "ios" ? useSafeAreaInsets().bottom : 0,
          zIndex: isTouchableForHeader ? 3 : 5,
        },
      ]}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          opacity: 0.7,
          bottom: 0,
          position: "absolute",
          left: 0,
          right: 0,
          height: screenHeight,
          width: screenWidth,
        }}
      />
      <View>{children}</View>
    </View>
  );
};

export default FooterContainer;
