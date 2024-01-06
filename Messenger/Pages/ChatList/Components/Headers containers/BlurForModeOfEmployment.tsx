import ModeOfEmployment from "./ModeOfEmployment";
import React, { Children, ReactNode, useEffect, useState } from "react";
import {
  Dimensions,
  Platform,
  TouchableOpacity,
  StatusBar,
  View,
  Text,
} from "react-native";
import { connect, useSelector } from "react-redux";
import Constants from "expo-constants";
import { EnumForChatListBlurs } from "../Enums/EnumsForChatListBlurs";
import ModalWindowOfPressOnHeadersAvatar from "./ModalWindowOfPressOnHeadersAvatar";
import ModalWindowOfPressOnModeOfEmployment from "./ModalWindowOfPressOnModeOfEmployment";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
interface BlurForModeOfEmploymentProps {
  children:ReactNode;
}
const BlurForModeOfEmployment: React.FC<BlurForModeOfEmploymentProps> = ({children}) => {

  const propsOfModeOfEmployment: any = useSelector((state: any) => {
    const props =
      state.chatListReducer.layoutOfModeOfEmployment.layoutOfModeOfEmployment;
    return props;
  });

 

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        top:
          Platform.OS == "android"
            ? screenHeight * 0.08 + StatusBar.currentHeight
            : screenHeight * 0.08 + Constants.statusBarHeight,
      }}
    >
      <View
        style={[
          {
            position: "absolute",
            top: -propsOfModeOfEmployment.height,
            left: propsOfModeOfEmployment.x + screenWidth * 0.02,
          },
          propsOfModeOfEmployment,
        ]}
      >
        <ModeOfEmployment />
        <View
          style={[
            {
              backgroundColor: "white",
              opacity: 0.3,
              borderRadius: 15,
              position: "absolute",
              zIndex: -1,
              paddingTop: 10,
              height: propsOfModeOfEmployment.height - 3,
              width: propsOfModeOfEmployment.width,
            },
          ]}
        />
      </View>
      {children}
    </TouchableOpacity>
  );
};

export default connect(null)(BlurForModeOfEmployment);
