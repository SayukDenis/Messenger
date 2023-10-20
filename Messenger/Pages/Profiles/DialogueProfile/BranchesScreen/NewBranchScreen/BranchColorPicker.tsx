// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  Keyboard,
  KeyboardEvent,
  Dimensions,
} from "react-native";
import { styles } from "../../../SemiComponents/ProfileStyles";
import { TriangleColorPicker, toHsv, fromHsv } from "react-native-color-picker";

interface BranchColorPickerProps {
  isVisible: boolean;
  onColorChange: (value: string) => void;
  pickedColor: string;
}

const BranchColorPicker: React.FC<BranchColorPickerProps> = (props) => {
  const colorPickerTitle: string = "Custom";
  const [color, setColor] = useState(toHsv("red"));
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
    if (inputText.length === 6) {
      setColor(toHsv(inputText));
    }
  }, [inputText]);

  useEffect(() => {
    props.onColorChange(fromHsv(color));
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
              { backgroundColor: fromHsv(color) },
            ]}
          >
            <View
              style={[styles.circleAroundColorPicker, { width: circleWidth }]}
            >
              <TriangleColorPicker
                style={styles.colorPickerElement}
                onColorChange={(color) => {
                  setColor(color);
                  setInputText("");
                }}
                color={color}
                hideControls={true}
              />
            </View>
          </View>

          <View style={styles.inputColorOuterContainer}>
            <View style={styles.inputColorInnerContainer}>
              <Text style={styles.inputColorTextHashTag}>#</Text>
              <TextInput
                style={styles.inputColorText}
                onChangeText={(value) => {
                  if (/^[a-zA-Z0-9]*$/.test(value)) {
                    setInputText(value);
                  }
                }}
                value={inputText}
                placeholder="1E1E1E"
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
