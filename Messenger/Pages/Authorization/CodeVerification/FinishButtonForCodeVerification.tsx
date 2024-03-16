import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../ChatList/Constants/ConstantsForChatlist";

interface FinishButtonForCodeVerificationProps {
  codeNumber: string;
  pressOnFinishButton: () => void;
}

const FinishButtonForCodeVerification: React.FC<
  FinishButtonForCodeVerificationProps
> = ({ codeNumber, pressOnFinishButton }) => {
  return (
    <TouchableOpacity
      onPress={pressOnFinishButton}
      disabled={codeNumber.length < 4}
      style={{
        width: screenWidth * 0.8,
        height: screenHeight * 0.06,
        alignSelf: "center",
        borderRadius: 7,
        overflow: "hidden",
        marginTop: 20,
        justifyContent: "center",
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
        {"Finish"}
      </Text>
      <View
        style={{
          width: screenWidth * 0.8,
          height: screenHeight * 0.07,
          opacity: 0.8,
          backgroundColor: codeNumber.length === 4 ? "#61B7F5" : "#B3B3B3",
          position: "absolute",
          zIndex: -1,
        }}
      />
    </TouchableOpacity>
  );
};

export default FinishButtonForCodeVerification;
