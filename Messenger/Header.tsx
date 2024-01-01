import React from "react";
export function Header({
  screenWidth,
  OnLayoutModeOfEmployment,
  PressOnModesOfEmployment,
  onHamburgerPress,
  OnHamburgerPressForDispatch,
  animationStateForTouchHamburger
}) {
  return <View style={[{
    justifyContent: "space-between",
    flexDirection: "row",
    width: screenWidth * 0.96
  }]}>
            <MagnifyingGlass style={headerstyles.magnifyingglass} />
            <TouchableOpacity onLayout={OnLayoutModeOfEmployment} activeOpacity={0.4} onPress={PressOnModesOfEmployment}>
              <ModeOfEmployment />
            </TouchableOpacity>

            <TouchableOpacity style={{
      justifyContent: "center"
    }} onPress={() => {
      onHamburgerPress(), OnHamburgerPressForDispatch();
    }}>
              {animationStateForTouchHamburger == 1 ? <HamburgerSVG /> : <BackButtonForHeaderChatListSVG />}
            </TouchableOpacity>
          </View>;
}
  