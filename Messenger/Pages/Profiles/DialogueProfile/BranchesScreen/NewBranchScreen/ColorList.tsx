// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../../../SemiComponents/ProfileStyles";
import SpecialSelectedColorIcon from "../Icons/SpecialSelectedColorIcon.tsx";
import { ColorPicker } from "react-native-color-picker";

interface ColorListProps {
  pickedColor: string;
  onColorPress: (value: string) => void;
  pickedSpecialColor: string;
  onSpecialColorPress: () => void;
}

const basicColors: string[] = [
  "(62, 62, 62)",
  "(128, 128, 128)",
  "(165, 42, 42)",
  "(255, 0, 0)",
  "(255, 165, 0)",
  "(255, 255, 0)",
  "(0, 128, 0)",
  "(70, 177, 255)",
  "(0, 0, 255)",
  "(128, 0, 128)",
  "(43, 43, 43)",
  "(100, 100, 100)",
  "(101, 26, 26)",
  "(151, 0, 0)",
  "(195, 126, 0)",
  "(223, 223, 3)",
  "(0, 98, 0)",
  "(57, 141, 201)",
  "(5, 5, 144)",
  "(92, 2, 92)",
];
const ColorList: React.FC<ColorListProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <View style={styles.selectedColorOuterContainer}>
        {/* Selected color */}
        <View
          style={[
            styles.selectedColorInnerContainer,
            { backgroundColor: props.pickedColor },
          ]}
        />
        {/* Special color */}
        <TouchableOpacity
          onPress={() => {
            props.onSpecialColorPress();
          }}
        >
          <View
            style={[
              styles.specialSelectedColorContainer,
              { backgroundColor: props.pickedSpecialColor },
            ]}
          >
            <SpecialSelectedColorIcon style={styles.specialSelectedColorIcon} />
          </View>
        </TouchableOpacity>
      </View>
      {/* Basic colors */}
      <View style={styles.basicColorsContainer}>
        {basicColors.map((color, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                props.onColorPress("rgb" + color);
              }}
            >
              <View
                key={color}
                style={[
                  styles.oneColorContainer,
                  { backgroundColor: "rgb" + basicColors[index] },
                ]}
              ></View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ColorList;
