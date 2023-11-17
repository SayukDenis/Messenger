import React from "react";
import { View, StyleProp, ViewStyle, Dimensions, Animated } from "react-native";

interface LineProps {
  screenWidth: number;
  screenHeight: number;
}

const Line: React.FC<LineProps> = ({ screenWidth, screenHeight }) => {
  return (
    <Animated.View style={{width:screenWidth*0.11,height:screenHeight*0.005,backgroundColor:"#A19C91",borderRadius:100}}/>
  );
};

export default Line;
