import React, { ReactNode } from "react";
import { TouchableOpacity, StatusBar, Platform, View } from "react-native";
import { BlurView } from "expo-blur";

import { connect } from "react-redux";

interface BlurAllProps {
  handlePress: () => void;
  handlePressOut: () => void;
  children?: ReactNode;
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
      {Platform.OS === "android" ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.7,
          }}
        />
      ) : (
        <>
          <StatusBar hidden />
          <BlurView
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            intensity={10}
          />
        </>
      )}
      {children}
    </TouchableOpacity>
  );
};

export default connect(null)(BlurAll);
