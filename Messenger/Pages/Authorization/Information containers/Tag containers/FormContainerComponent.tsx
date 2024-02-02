import React from "react";
import FormContainer from "../../Authorization containers/FormContainer";
import { Text, View, TextInput} from 'react-native';
import ValidTextSVG from "../../../SemiComponents/ValidTextSVG";
import InValidTextSVG from "../../../SemiComponents/InValidTextSVG";

interface FormContainerComponentProps
{
  textInputRef: React.RefObject<TextInput>;
  inputTag: string;
  setInputTag: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
}

const FormContainerComponent: React.FC<FormContainerComponentProps> = ({
textInputRef,
inputTag,
setInputTag,
isValid
}) => {
  return (
    <FormContainer
    borderTop={true}
    childrenLeft={
      <Text
        style={{
          color: "white",
          fontSize: 17,
          //alignSelf: "center",
        }}
      >
        {"@tag"}
      </Text>
    }
    childrenRight={
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ alignSelf: "center", marginLeft: 10 }}>
          <TextInput
            placeholder="Enter your @tag"
            placeholderTextColor="white"
            ref={textInputRef}
            value={inputTag}
            onChangeText={setInputTag}
            style={{
              fontSize: 18,
              color: "white",
              //backgroundColor: "black",
            }}
            autoCapitalize={"none"}
            autoCorrect={false}
            autoComplete="off"
            maxLength={16}
          />
        </View>
        <View style={{ alignSelf: "center", marginRight: 4 }}>
          {isValid ? (
            <ValidTextSVG />
          ) : (
            <View style={{ opacity: 0.4 }}>
              <InValidTextSVG fill="red" />
            </View>
          )}
        </View>
      </View>
    }
  />
)};

export default FormContainerComponent;