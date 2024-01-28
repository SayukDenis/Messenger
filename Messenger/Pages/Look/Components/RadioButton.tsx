import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import ContainerForButtonForSettings from "../../SemiComponents/ContainerForButtonForSettings";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../../Resources/themes";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface RadioButtonProps {
  id: number;
  label: string;
  isSelected: boolean;
  onPress: (id: number) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  isSelected,
  onPress,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={styles.radioBtnContainer}
      onPress={() => onPress(id)}
    >
      <ContainerForButtonForSettings>
        <Text style={styles.radioText}>{label}</Text>
        <View
          style={[
            styles.externalCircle,
            { backgroundColor: theme.checkBox.outer },
          ]}
        >
          {isSelected && (
            <View
              style={[
                styles.internalCircle,
                { backgroundColor: theme.checkBox.inner },
              ]}
            ></View>
          )}
        </View>
      </ContainerForButtonForSettings>
    </TouchableOpacity>
  );
};

const radioCircleWidth = screenHeight * 0.06 * (3 / 8);

const styles = StyleSheet.create({
  radioBtnContainer: {
    height: screenHeight * 0.06,
    width: screenWidth * 0.94,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
    //backgroundColor: "white",
    opacity: 1,
    marginVertical: 1.2,
  },
  externalCircle: {
    borderRadius: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#FEE0A3",
    height: radioCircleWidth,
    width: radioCircleWidth,
    position: "relative",
  },
  internalCircle: {
    borderRadius: 45,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#5F453A",
    height: radioCircleWidth * (7 / 15),
    width: radioCircleWidth * (7 / 15),
  },
  radioText: {
    fontSize: 16,
    marginLeft: 15,
    alignSelf: "center",
    color: "#6A38AD",
  },
});

export default RadioButton;
