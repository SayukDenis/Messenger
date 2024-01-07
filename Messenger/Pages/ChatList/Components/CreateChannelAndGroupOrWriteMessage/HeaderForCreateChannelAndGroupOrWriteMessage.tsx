import React, { useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import BackButton from "../../../SemiComponents/BackButton";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";

import { headerstyles } from "../../Styles/HeaderStyle";

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
      </View>
    </HeaderContainer>
  );
};

export default HeaderForCreateChannelAndGroupOrWriteMessage;
