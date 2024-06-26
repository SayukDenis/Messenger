import React, { useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import BackButton from "../../../SemiComponents/BackButton";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import {
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import DefaultContainerInHeader from "../../../SemiComponents/DefaultContainerInHeader";

interface HeaderForCreateChannelAndGroupOrWriteMessageProps {
  navigation: any;
}

const HeaderForCreateChannelAndGroupOrWriteMessage: React.FC<
  HeaderForCreateChannelAndGroupOrWriteMessageProps
> = ({ navigation }) => {
  const pressOnBackButton = useRef(() => {
    navigation.goBack();
  });

  return (
    <HeaderContainer>
      <DefaultContainerInHeader>
        <TouchableOpacity
          onPress={pressOnBackButton.current}
          style={{ alignSelf: "center", width: screenWidth * 0.2 }}
        >
          <BackButton />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginRight: screenWidth * 0.2,
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            {"Create and write"}
          </Text>
        </View>
      </DefaultContainerInHeader>
    </HeaderContainer>
  );
};

export default HeaderForCreateChannelAndGroupOrWriteMessage;
