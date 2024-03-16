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
import FormContainerComponent from "./FormContainerComponent";

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
    textOfTips(inputTag);
  }, [inputTag]);
  const isMatchTags = async (tag: string) => {
    try {
      const serverUrl = listentingServer + matchTagForAuthorizationEndPoint;
      const requestData = {
        tag,
      };
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      console.log("Відповідь від сервера:", data);
      return data.isMatch;
    } catch (error) {
      console.error("Помилка:", error);
      return undefined;
    }
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
  const textOfTips = async (input: string) => {
    if (input.length == 0) {
      setTextOfTipsString("We are waiting for your tag input");
      return;
    } else if (input.length < 5) {
      setIsValid(false);
      setTextOfTipsString("Your tag is shorter than 5 characters");
      return;
    } else if (input.length > 16) {
      setIsValid(false);
      setTextOfTipsString("Your tag is longer than 16 characters");
      return;
    } else if (!regex.test(input)) {
      setIsValid(false);
      setTextOfTipsString("Your tag has invalid characters.");
      return;
    } else {
      try {
        const isMatchTag = await isMatchTags(input);
        if (isMatchTag) {
          setIsValid(false);
          setTextOfTipsString("This tag exists.");
          return;
        }
        setIsValid(true);
        setTextOfTipsString("Your tag is valid.");
      } catch (error) {
        console.error("Error checking if tag exists:", error);
        setIsValid(false);
        return "Error checking if tag exists.";
      }
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
        <TouchableOpacity  activeOpacity={1} onPress={() => textInputRef.current?.focus()}>
          <FormContainerComponent 
          textInputRef={textInputRef}
          inputTag={inputTag}
          setInputTag={setInputTag}
          isValid={isValid}
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
