import React from "react";
import { Text, View } from "react-native";
import CodeForPhoneSVG from "./CodeForPhoneSVG"; // Замініть це на шлях до вашого компонента
import {
  screenHeight,
  screenWidth,
} from "../../ChatList/Constants/ConstantsForChatlist";

interface CodeVerificationContainerProps {}

const CodeVerificationContainer: React.FC<
  CodeVerificationContainerProps
> = ({}) => {
  return (
    <>
      <View
        style={{
          marginTop: screenHeight * 0.1,
          marginLeft: screenWidth * 0.24,
        }}
      >
        <CodeForPhoneSVG
          height={screenHeight * 0.15}
          width={screenWidth * 0.4}
        />
      </View>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 25,
          color: "white",
          marginTop: 20,
        }}
      >
        {"Code for phone"}
      </Text>
    </>
  );
};

export default CodeVerificationContainer;
