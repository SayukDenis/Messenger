import React, { useRef } from "react";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";

import { TouchableOpacity } from "react-native-gesture-handler";
import { heightOfHeader, screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";
import BackButton from "../../../SemiComponents/BackButton";
import { View, Text } from "react-native";

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

        <TouchableOpacity
          onPress={pressOnBackButton.current}
          style={{
            //marginTop:heightOfHeader-screenHeight*0.08,
            alignSelf: "flex-end",
           // width: screenWidth * 0.2,
           // justifyContent: "center",
          //  flexDirection: "row",
          backgroundColor:"red"
          }}
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
  
    </HeaderContainer>
  );
};

export default HeaderForCreateGroupPage;
