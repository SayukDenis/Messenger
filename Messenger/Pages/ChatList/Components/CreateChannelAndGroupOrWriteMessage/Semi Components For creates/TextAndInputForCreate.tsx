import React, { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import ContainerForButtonForSettings from "../../../../SemiComponents/ContainerForButtonForSettings";
import TextInputValidateForCountOfText from "../../../../SemiComponents/TextInputValidateForCountOfText";

interface TextAndInputForCreateProps {
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  maxNumberOfChars: number;
  changeTopic: string;
  typeOfChat: string;
}

const TextAndInputForCreate: React.FC<TextAndInputForCreateProps> = ({
  marginTop,
  marginBottom,
  marginLeft,
  inputText,
  setInputText,
  maxNumberOfChars,
  changeTopic,
  typeOfChat,
}) => {
  return (
    <>
      <Text
        style={{
          marginTop,
          marginLeft,
          color: "#2B1D1D",
          fontSize: 17,
          marginBottom,
        }}
      >
        {changeTopic}
      </Text>

      <ContainerForButtonForSettings>
        <TextInputValidateForCountOfText
          placeHolder={`${typeOfChat} ${changeTopic.toLowerCase()}`}
          maxNumberOfChars={maxNumberOfChars}
          setInputText={setInputText}
          inputText={inputText}
        />
      </ContainerForButtonForSettings>
    </>
  );
};

export default TextAndInputForCreate;
