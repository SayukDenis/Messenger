import React from "react";
import { TouchableOpacity, View } from "react-native";
import MagnifyingGlass from "./MagnifyingGlass";
import ModeOfEmployment from "./ModeOfEmployment";
import HamburgerSVG from "../SVG/HamburgerSVG";
import BackButtonForHeaderChatListSVG from "../SVG/BackButtonForHeaderChatListSVG";
import { headerstyles } from "../../Styles/HeaderStyle";
import { screenWidth } from "../../Constants/ConstantsForChatlist";
import { connect } from "react-redux";
function CentralHeaderContainer({
  OnLayoutModeOfEmployment,
  PressOnModesOfEmployment,
  onHamburgerPress,
  OnHamburgerPressForDispatch,
  animationStateForTouchHamburger,
}) {
  return (
    <View
      style={[
        {
          justifyContent: "space-between",
          flexDirection: "row",
          width: screenWidth * 0.96,
        },
      ]}
    >
      <MagnifyingGlass style={headerstyles.magnifyingglass} />
      <TouchableOpacity
        onLayout={OnLayoutModeOfEmployment}
        activeOpacity={0.4}
        onPress={PressOnModesOfEmployment}
      >
        <ModeOfEmployment />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: "center",
        }}
        onPress={() => {
          onHamburgerPress(), OnHamburgerPressForDispatch();
        }}
      >
        {animationStateForTouchHamburger == 1 ? (
          <HamburgerSVG />
        ) : (
          <BackButtonForHeaderChatListSVG />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default connect(null)(CentralHeaderContainer);
