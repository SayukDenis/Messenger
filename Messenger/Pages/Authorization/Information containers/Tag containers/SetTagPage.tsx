import React, { useEffect, useRef, useState } from "react";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../../SemiComponents/BackButton";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../../ChatList/Constants/ConstantsForChatlist";
import FormContainer from "../../Authorization containers/FormContainer";
import ValidTextSVG from "../../../SemiComponents/ValidTextSVG";
import InValidTextSVG from "../../../SemiComponents/InValidTextSVG";
import {
  listentingServer,
  matchTagForAuthorizationEndPoint,
} from "../../../ChatList/Constants/ServerConection";
import { IsMatchTagsValidationHandler, LengthValidationHandler, SymbolValidationHandler } from "./TagValidationChain";

interface SetTagPageProps {
  navigation: any;
  route: any;
}

const SetTagPage: React.FC<SetTagPageProps> = ({ navigation, route }) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [inputTag, setInputTag] = useState<string>(route.params.tag);
  const [textOfTipsString, setTextOfTipsString] = useState<string>(
    "We are waiting for your tag input"
  );
  const textInputRef = useRef<TextInput>(null);
  const regex = /^[0-9a-z_]{5,16}$/;
  const pressOnBackButton = () => {
    navigation.goBack();
  };
  const pressOnDoneButton = () => {
    route.params.setTag(inputTag);
    navigation.goBack();
  };
  useEffect(() => {
    validateTag(inputTag);
  }, [inputTag]);
  const validateTag = async (input:string) => {
    const lengthValidator = new LengthValidationHandler();
    const symbolValidator = new SymbolValidationHandler();
    const matchValidator = new IsMatchTagsValidationHandler();
    
    lengthValidator.setNext(symbolValidator).setNext(matchValidator);

    await lengthValidator.handle(input, setTextOfTipsString, setIsValid);
  };
  const colorOfTips = (input: string) => {
    if (input.length == 0) {
      return "white";
    } else if (isValid) {
      return "#A3FBA1";
    } else {
      return "red";
    }
  };
  return (
    <BackGroundGradientView>
      <ScrollView scrollEnabled={false}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginTop: heightOfHeader - screenHeight * 0.06,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={pressOnBackButton}
            style={{
              width: screenWidth * 0.2, // backgroundColor: "red"
            }}
          >
            <BackButton />
          </TouchableOpacity>
          <Text style={{ alignSelf: "center", fontSize: 22, color: "#2B1D1D" }}>
            {"@tag"}
          </Text>
          <TouchableOpacity
            style={{ width: screenWidth * 0.2, justifyContent: "center" }}
            disabled={!isValid}
            onPress={pressOnDoneButton}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                color: isValid ? "#6E23CD" : "gray",
              }}
            >
              {"Done"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            marginLeft: screenWidth * 0.1,
            fontSize: 18,
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          {"Your @tag"}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => textInputRef.current?.focus()}
        >
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
        </TouchableOpacity>
        <Text
          style={{
            color: colorOfTips(inputTag),
            marginLeft: screenWidth * 0.1,
            marginTop: 10,
            fontSize: 16,
            opacity: 0.8,
          }}
        >
          {textOfTipsString}
        </Text>
        <Text
          style={{
            color: "white",
            marginLeft: screenWidth * 0.1,
            marginTop: 10,
            fontSize: 16,
            opacity: 0.8,
            width: screenWidth * 0.8,
          }}
        >
          {
            "You can use a-z, 0-9 and underscores. Minimum length is 5 characters and maximum is 16 characters. Your tag must be unique."
          }
        </Text>
      </ScrollView>
    </BackGroundGradientView>
  );
};

export default SetTagPage;
