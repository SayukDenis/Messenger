import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { textStyle, viewStyle } from "./CameraComponent";
import { screenHeight } from "../../../../Constants/ConstantsForChatlist";
import {
  isCurrentDigit,
  viewOfDigit,
} from "./Functions/FunctionsForScaleCamera";

interface ScaleOfCameraContainerProps {
  digit: number;
  zoom: number;
}

const ScaleOfCameraContainer: React.FC<ScaleOfCameraContainerProps> = ({
  digit,
  zoom,
}) => {
  return (
    <View style={viewStyle.wrapContainer}>
      <View
        style={[
          viewStyle.container,
          isCurrentDigit(digit, zoom)
            ? viewStyle.selectContainer
            : viewStyle.nonSelectContainer,
        ]}
      >
        <Text
          style={[
            textStyle.text,
            isCurrentDigit(digit, zoom)
              ? textStyle.selectText
              : textStyle.nonSelectText,
          ]}
        >
          {viewOfDigit(digit, zoom)}
        </Text>
        <View style={viewStyle.backGroundView} />
      </View>
    </View>
  );
};

export default ScaleOfCameraContainer;
