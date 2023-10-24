// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardEvent,
  Dimensions,
} from "react-native";
import { styles } from "../Styles";
import ColorPicker from "react-native-wheel-color-picker";
import tinycolor from "tinycolor2";

interface BranchColorPickerProps {
  isVisible: boolean;
  onColorChange: (value: string) => void;
  pickedColor: string;
}

const BranchColorPicker: React.FC<BranchColorPickerProps> = (props) => {
  const colorPickerTitle: string = "Custom";
  const [color, setColor] = useState("#7c4f91");
  const [inputText, setInputText] = useState("");

  // To adjust circle sizes when keyboard is opened or closed
  const [circleWidth, setcircleWidth] = useState(
    0.225 * Dimensions.get("screen").height
  );

  Keyboard.addListener("keyboardDidShow", (event: KeyboardEvent) => {
    setcircleWidth(0.2 * Dimensions.get("screen").height);
  });

  Keyboard.addListener("keyboardDidHide", (event: KeyboardEvent) => {
    setcircleWidth(0.225 * Dimensions.get("screen").height);
  });

  useEffect(() => {
    if (inputText.length === 6 && tinycolor(inputText).isValid()) {
      setColor(inputText);
    }
  }, [inputText]);

  useEffect(() => {
    props.onColorChange(color);
  }, [props.isVisible]);

  return (
    <>
      {props.isVisible && (
        <View style={styles.colorPickerOuterContainer}>
          <View style={styles.colorPickerTitleContainer}>
            <Text style={styles.colorPickerTitle}>{colorPickerTitle}</Text>
          </View>

          <View
            style={[
              styles.colorPickerInnerContainer,
              { backgroundColor: color },
            ]}
          >
            <View
              style={[styles.circleAroundColorPicker, { width: circleWidth }]}
            >
              <View style={styles.colorPickerElement}>
                <ColorPicker
                  onColorChange={(color) => {
                    setColor(color);
                  }}
                  thumbSize={32}
                  sliderSize={27}
                  row={true}
                  gapSize={8}
                  swatches={false}
                  color={color}
                  shadeSliderThumb={true}
                />
              </View>
            </View>
          </View>

          <View style={styles.inputColorOuterContainer}>
            <View style={styles.inputColorInnerContainer}>
              <Text style={styles.inputColorTextHashTag}>#</Text>
              <TextInput
                style={styles.inputColorText}
                onChangeText={(value) => {
                  if (/^[a-zA-Z0-9]*$/.test(value)) {
                    setInputText(value.toUpperCase());
                  }
                }}
                value={inputText}
                placeholder="7C4F91"
                placeholderTextColor={"rgb(185, 185, 185)"}
                maxLength={6}
                autoCapitalize="characters"
                keyboardType="email-address"
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default BranchColorPicker;
