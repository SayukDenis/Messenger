import { ReactNode } from "react";
import React from "react";
import { footerstyles } from "../../Styles/FooterStyle";
import { connect, useSelector } from "react-redux";
import { Dimensions, Animated } from "react-native";

interface ContainerForHeaderModeOfEmploymentWithArrowProps {
  children: ReactNode; // Змінено тут
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ContainerForHeaderModeOfEmploymentWithArrow: React.FC<
  ContainerForHeaderModeOfEmploymentWithArrowProps
> = ({ children }) => {
  // Змінено тут
  const propsOfModeOfEmployment: any = useSelector((state: any) => {
    const props =
      state.chatListReducer.layoutOfModeOfEmployment.layoutOfModeOfEmployment;
    return props;
  });
  return (
    <>
      <Animated.View
        style={[
          footerstyles.triangle,
          {
            borderBottomColor: "#E7E6E4",
            top: -4,
            right:
              screenWidth -
              propsOfModeOfEmployment.x -
              propsOfModeOfEmployment.width +
              10 +
              screenWidth * 0.0031,
            transform: [{ rotate: "45deg" }],
            position: "absolute",
          },
        ]}
      />

      <Animated.View
        style={{
          backgroundColor: "#E7E6E4",
          height: screenHeight * 0.05,
          width: screenWidth * 0.5,
          top: screenHeight * 0.001,
          right:
            screenWidth -
            propsOfModeOfEmployment.width -
            propsOfModeOfEmployment.x +
            10 +
            screenWidth * 0.0031,
          position: "absolute",
          borderRadius: 30,

          justifyContent: "center",
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};

export default connect(null)(ContainerForHeaderModeOfEmploymentWithArrow);
