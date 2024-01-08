import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ValidTextSVG from "./ValidTextSVG";
import InValidTextSVG from "./InValidTextSVG";
import {
  screenHeight,
  screenWidth,
} from "../ChatList/Constants/ConstantsForChatlist";

interface TextInputValidateForCountOfTextProps {
  placeHolder: string;
  maxNumberOfChars: number;
}

const TextInputValidateForCountOfText: React.FC<
  TextInputValidateForCountOfTextProps
> = ({ placeHolder, maxNumberOfChars }) => {
  const marginLeft = screenWidth * 0.03;
  const textInputRef = useRef<TextInput>(null);
  const [inputText, setInputText] = useState<string>("");
  return (
    <>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={"#493A3A"}
        ref={textInputRef}
        value={inputText}
        onChangeText={(text: string) => {
          setInputText(text);
        }}
        style={{
          fontSize: 16,
          padding: marginLeft + 5,
          width: screenWidth * 0.8,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            height: screenHeight * 0.03,
            width: screenWidth * 0.07,
          }}
        >
          {inputText.length <= maxNumberOfChars ? (
            <ValidTextSVG />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setInputText("");
                textInputRef.current?.focus()
              }}
            >
              <InValidTextSVG />
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: inputText.length <= maxNumberOfChars ? "#A3FBA1" : "#ED7474",
          }}
        >{`${inputText.length}/${maxNumberOfChars}`}</Text>
      </View>
    </>
  );
};

export default TextInputValidateForCountOfText;
