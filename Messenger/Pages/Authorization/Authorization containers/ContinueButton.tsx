import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../ChatList/Constants/ConstantsForChatlist";

interface ContinueButtonProps {
  isValidPhoneNumber: boolean;
  pressOnContinueButton: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  isValidPhoneNumber,
  pressOnContinueButton,
}) => {
  return (
    <TouchableOpacity
      onPress={pressOnContinueButton}
      disabled={!isValidPhoneNumber}
      style={{
        width: screenWidth * 0.8,
        height: screenHeight * 0.06,
        alignSelf: "center",
        borderRadius: 7,
        overflow: "hidden",
        marginTop: 20,
        justifyContent: "center",
        backgroundColor: isValidPhoneNumber
            ? "#61B7F5"
            : "#B3B3B3",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          color: "white",
          fontWeight: "800",
        }}
      >
        {"Continue"}
      </Text>
      
    </TouchableOpacity>
  );
};
export default ContinueButton;
