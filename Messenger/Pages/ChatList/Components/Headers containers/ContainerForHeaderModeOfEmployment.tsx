import { ReactNode, useEffect } from "react";

import React from "react";
import { footerstyles } from "../../Styles/FooterStyle";
import { connect, useSelector } from "react-redux";
import { Dimensions, Text, Animated } from "react-native";

interface ContainerForHeaderModeOfEmploymentProps {
  children: ReactNode;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ContainerForHeaderModeOfEmploymentWith: React.FC<
  ContainerForHeaderModeOfEmploymentProps
> = ({ children }) => {
  const propsOfModeOfEmployment: any = useSelector((state: any) => {
    const props =
      state.chatListReducer.layoutOfModeOfEmployment.layoutOfModeOfEmployment;
    return props;
  });

  return (
    <Animated.View
      style={{
        backgroundColor: "#E7E6E4",
        height: screenHeight * 0.05,
        width: screenWidth * 0.5,
        right:
          screenWidth -
          propsOfModeOfEmployment.width -
          propsOfModeOfEmployment.x +
          10 +
          screenWidth * 0.0031,
          position:"absolute",
        borderRadius: 30,
        justifyContent: "center",
      }}
    >
      {children}
    </Animated.View>
  );
};

export default connect(null)(ContainerForHeaderModeOfEmploymentWith);
