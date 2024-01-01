

import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  StatusBar,
  Text,
  Dimensions,
  Platform,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../dao/Models/SelfProfile";
const { height: screenHeight } = Dimensions.get("window");

interface BlurAllProps {
  
  handlePress: () => void;
  handlePressOut: () => void;
  children:ReactNode;


}

const BlurAll: React.FC<BlurAllProps> = ({
  children,
  handlePress,
  handlePressOut,
  
  
}) => {
  
  

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
      }}
      onPress={handlePress}
      onPressOut={handlePressOut}
      onLongPress={handlePress}
      activeOpacity={1}
    >
      <StatusBar hidden />
      {Platform.OS === 'android' ? (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor:"black",
          opacity:0.3
        }}/>
      ) : (
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          intensity={10}
        />
      )}
      <StatusBar hidden/>
        {children}
    </TouchableOpacity>
  );
};

export default connect(null)(BlurAll);
