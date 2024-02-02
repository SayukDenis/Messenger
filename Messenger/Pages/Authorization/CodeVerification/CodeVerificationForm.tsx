import React from "react";
import FormContainer from "../Authorization containers/FormContainer";
import { Text, View, TextInput } from "react-native";
import { screenWidth } from "../../ChatList/Constants/ConstantsForChatlist";
interface CodeVerificationFormProps
{
  ref: React.RefObject<TextInput>
  codeNumber: string
  setCodeNumber: React.Dispatch<React.SetStateAction<string>>
}

const CodeVerificationForm: React.FC<CodeVerificationFormProps> = ({
  ref,
  codeNumber,
  setCodeNumber
}) => {
  const fontSize = 18;
  return(
  <FormContainer
              borderTop={true}
              childrenLeft={
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize,
                  }}
                >
                  {"Code"}
                </Text>
              }
              childrenRight={
                <View style={{ alignSelf: "center", marginLeft: 10 }}>
                  <TextInput
                    ref={ref}
                    value={codeNumber}
                    onChangeText={setCodeNumber}
                    placeholder="0000"
                    keyboardType="numeric"
                    placeholderTextColor={"white"}
                    maxLength={4}
                    style={{
                      fontSize,
                      color: "white",
                      // backgroundColor: "black",
                      overflow: "hidden",
                      width: screenWidth * 0.5,
                    }}
                  />
                </View>
              }
              />
              )}
export default CodeVerificationForm;