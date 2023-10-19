// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../../../SemiComponents/ProfileStyles";
import { TriangleColorPicker, toHsv, fromHsv } from "react-native-color-picker";

interface BranchColorPickerProps {
  isVisible: boolean;
}

const BranchColorPicker: React.FC<BranchColorPickerProps> = (props) => {
  const colorPickerTitle: string = "Custom";
  const [color, setColor] = useState(toHsv("green"));
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
            <View style={styles.whiteBackgroundBehindColorPicker}>
              <TriangleColorPicker
                style={styles.colorPickerElement}
                onColorChange={(color) => {
                  setColor(color);
                }}
                hideControls={true}
                color={color}
                rotationHackFactor={50}
              />
            </View>
          </View>

          <View style={styles.inputColorContainer}>
            <TextInput
              style={styles.newBranchNameInput}
              value="ABAO"
              placeholder="COLOR"
            ></TextInput>
          </View>
        </View>
      )}
    </>
  );
};

export default BranchColorPicker;
