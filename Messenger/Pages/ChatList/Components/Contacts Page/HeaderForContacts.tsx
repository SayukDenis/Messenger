import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import BackButton from "../../../SemiComponents/BackButton";
import DefaultContainerInHeader from "../../../SemiComponents/DefaultContainerInHeader";

interface HeaderForContactsProps {
  navigation: any;
}

const HeaderForContacts: React.FC<HeaderForContactsProps> = ({
  navigation,
}) => {
  const pressOnBackButton = useRef(() => {
    navigation.goBack();
  });
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    //inputRef.current?.focus();
  }, []);

  return (
    <HeaderContainer>
      <DefaultContainerInHeader>
        <TouchableOpacity
          onPress={pressOnBackButton.current}
          style={{ alignSelf: "center" }}
        >
          <BackButton />
        </TouchableOpacity>
        <View style={{ alignSelf: "center", marginLeft: 5 }}>
          <TextInput
            ref={inputRef}
            style={{
              width: screenWidth * 0.8,
              height: screenHeight * 0.0415,
              backgroundColor: "#272727",
              alignSelf: "center",
              color: "white",
              paddingHorizontal: 15,
              borderRadius: 100,
              fontSize: 16,
            }}
            placeholder="Search in Telentik"
            placeholderTextColor={"#888282"}
            keyboardAppearance="dark"
          />
        </View>
      </DefaultContainerInHeader>
    </HeaderContainer>
  );
};

export default HeaderForContacts;
