import React, { useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import BackButton from "../../../SemiComponents/BackButton";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import {
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import DefaultContainerInHeader from "../../../SemiComponents/DefaultContainerInHeader";
interface HeaderForCreateGroupPageProps {
  navigation: any;
}

const HeaderForCreateGroupPage: React.FC<HeaderForCreateGroupPageProps> = ({
  navigation,
}) => {
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
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            {"Create group"}
          </Text>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "center", width: screenWidth * 0.2 }}
        >
          <Text
            style={{
              alignSelf: "flex-end",
              fontSize: 18,
              paddingRight: 15,
              color: "#734CA5",
            }}
          >
            {"Done"}
          </Text>
        </TouchableOpacity>
      </DefaultContainerInHeader>
    </HeaderContainer>
  );
};

export default HeaderForCreateGroupPage;
