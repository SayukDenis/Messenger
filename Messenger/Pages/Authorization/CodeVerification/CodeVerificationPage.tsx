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
import CodeVerificationForm from "./CodeVerificationForm";

interface CodeVerificationPageProps {
  navigation: any;
}

const CodeVerificationPage: React.FC<CodeVerificationPageProps> = ({
  navigation,
}) => {
  const fontSize = 18;
  const [codeNumber, setCodeNumber] = useState("");
  const codeInputRef = useRef<TextInput>(null);
  const pressOnBackButton = () => {
    navigation.goBack();
  };
  const pressOnFinishButton = () => {
    navigation.navigate("Add User Information Page");
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
            <CodeVerificationForm 
            ref = {codeInputRef} 
            codeNumber = {codeNumber}
            setCodeNumber={setCodeNumber} 
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
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
