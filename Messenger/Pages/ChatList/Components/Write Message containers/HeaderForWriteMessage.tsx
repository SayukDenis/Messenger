import React, { useRef } from "react";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import DefaultContainerInHeader from "../../../SemiComponents/DefaultContainerInHeader";
import { TextInput, TouchableOpacity } from "react-native";
import BackButton from "../../../SemiComponents/BackButton";
import { View } from "react-native";
import { screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";

interface HeaderForWriteMessageProps {
  navigation: any;
}

const HeaderForWriteMessage: React.FC<HeaderForWriteMessageProps> = ({
  navigation,
}) => {
    const inputRef = useRef<TextInput>(null);
  const pressOnBackButton = useRef(() => {
    navigation.goBack();
  });
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
              width: screenWidth* 0.8,
              height: screenHeight* 0.0415,
              backgroundColor: "#272727",
              alignSelf: "center",
              color: "white",
              paddingHorizontal: 15,
              borderRadius: 100,
              fontSize: 16,
            }}
            placeholder="Search to write"
            placeholderTextColor={"#888282"}
            keyboardAppearance="dark"
          />
        </View>
      </DefaultContainerInHeader>
    </HeaderContainer>
  );
};

export default HeaderForWriteMessage;
