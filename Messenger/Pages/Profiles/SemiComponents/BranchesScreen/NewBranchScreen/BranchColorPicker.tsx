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
import tinycolor from "tinycolor2";
import ColorPicker from "react-native-wheel-color-picker";

interface BranchColorPickerProps {
  isVisible: boolean;
  onColorChange: (value: string) => void;
  pickedColor: string;
}

const BranchColorPicker: React.FC<BranchColorPickerProps> = (props) => {
  const colorPickerTitle: string = "Custom";
  const [color, setColor] = useState(props.pickedColor);
  const [inputText, setInputText] = useState("");

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
            <View style={styles.circleAroundColorPicker}>
              <View
                style={[
                  styles.colorPickerElement,
                  {
                    right: 0.005 * Dimensions.get("screen").width,
                  },
                ]}
              >
                <ColorPicker
                  onColorChange={(color) => {
                    setColor(color);
                  }}
                  thumbSize={0.11 * Dimensions.get("screen").width}
                  sliderSize={27}
                  row={true}
                  gapSize={0.015 * Dimensions.get("screen").width}
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
