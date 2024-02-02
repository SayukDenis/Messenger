import React, { useEffect, useRef, useState } from "react";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import BackButton from "../../SemiComponents/BackButton";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../ChatList/Constants/ConstantsForChatlist";

import { ScrollView } from "react-native";
import CodeVerificationContainer from "./CodeVerificationContainer";
import FormContainer from "../Authorization containers/FormContainer";
import FinishButtonForCodeVerification from "./FinishButtonForCodeVerification";
import {
  codeForAuthorizationEndPoint,
  idOfUserForAuthorizationEndPoint,
  listentingServer,
} from "../../ChatList/Constants/ServerConection";

interface CodeVerificationPageProps {
  navigation: any;
  route: any;
}

const CodeVerificationPage: React.FC<CodeVerificationPageProps> = ({
  navigation,
  route,
}) => {
  const phoneNumber = route.params.phoneNumber;
  const requestData = {
    phoneNumber: phoneNumber,
  };
  const fontSize = 18;
  const [codeNumber, setCodeNumber] = useState("");
  const [codeForCheck, setCodeForCheck] = useState("");
  const codeInputRef = useRef<TextInput>(null);
  const pressOnBackButton = () => {
    navigation.goBack();
  };
  const pressOnFinishButton = async () => {
    if (codeForCheck != codeNumber) {
      setCodeNumber("");
      return;
    }
    const id = await getId();
    if (id === -1) {
      navigation.navigate("Add User Information Page", { phoneNumber });
    }
  };
  useEffect(() => {
    getCode();
  }, []);
  const getId = async (): Promise<number | undefined> => {
    try {
      let serverUrl = listentingServer + idOfUserForAuthorizationEndPoint;
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      console.log("Відповідь від сервера:", data);
      return data.id;
    } catch (error) {
      console.error("Помилка:", error);
      return undefined;
    }
  };
  const getCode = async () => {
    setCodeNumber("");
    let serverUrl = listentingServer + codeForAuthorizationEndPoint;
    fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        console.log("Відповідь від сервера:", data);
        setCodeForCheck(data.code);
      })
      .catch((error) => {
        console.error("Помилка:", error);
      });
  };
  return (
    <BackGroundGradientView>
      <ScrollView scrollEnabled={false}>
        <TouchableOpacity
          onPress={pressOnBackButton}
          style={{ marginTop: heightOfHeader - screenHeight * 0.06 }}
        >
          <BackButton />
        </TouchableOpacity>
        <CodeVerificationContainer />

        <View
          style={{
            marginTop: 23,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              codeInputRef.current?.focus();
            }}
            activeOpacity={1}
          >
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
                    ref={codeInputRef}
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
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            getCode();
          }}
        >
          <Text
            style={{
              marginLeft: screenWidth * 0.1,
              fontSize,
              color: "#6E23CD",
              marginTop: 12,
            }}
          >
            {"Send code again"}
          </Text>
        </TouchableOpacity>

        <FinishButtonForCodeVerification
          codeNumber={codeNumber}
          pressOnFinishButton={pressOnFinishButton}
        />
      </ScrollView>
    </BackGroundGradientView>
  );
};

export default CodeVerificationPage;
