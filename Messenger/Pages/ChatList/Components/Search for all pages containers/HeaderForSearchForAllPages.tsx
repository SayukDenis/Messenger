import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import { headerstyles } from "../../Styles/HeaderStyle";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import BackButton from "../../../SemiComponents/BackButton";

interface HeaderForSearchForAllPagesProps {
  navigation: any;
}

const HeaderForSearchForAllPages: React.FC<HeaderForSearchForAllPagesProps> = ({
  navigation,
}) => {
  const pressOnBackButton = useRef(() => {
    navigation.goBack();
  });
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <HeaderContainer>
      <View
        style={[
          headerstyles.header,
          {
            width: screenWidth * 0.96,
            height: screenHeight * 0.08,
            flexDirection: "row",
          },
        ]}
      >
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
      </View>
    </HeaderContainer>
  );
};

export default HeaderForSearchForAllPages;
