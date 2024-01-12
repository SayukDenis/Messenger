import React, { useRef } from "react";
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
  navigation
}:any) {
  const onMagnifyingGlassPress=useRef(()=>{
    navigation.navigate("SearchForAllPages")
  })
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
      <TouchableOpacity
        style={headerstyles.magnifyingglass}
        onPress={onMagnifyingGlassPress.current}
        
      >
        <MagnifyingGlass />
      </TouchableOpacity>

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
