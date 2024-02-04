import { View, TouchableOpacity, Text, StatusBar } from "react-native";
import React from "react";
import { Theme } from "../../../Resources/themes";
import { Dimensions } from "react-native";
import { globalStyles } from "../../../Resources/styles";
import BackButton from "../../SemiComponents/BackButton";
import HeaderContainer from "../../SemiComponents/HeaderContainer";
import DefaultContainerInHeader from "../../SemiComponents/DefaultContainerInHeader";
import { heightOfHeader } from "../../ChatList/Constants/ConstantsForChatlist";
import Constants from "expo-constants";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Header = ({ theme_prop }: { theme_prop: Theme }) => {
  return (
    <HeaderContainer
    //   style={[
    //     globalStyles.header,
    //     { marginBottom: 17, alignItems: "center" },
    //     { backgroundColor: theme_prop.header_and_footer_background },
    //   ]}
    >
      <DefaultContainerInHeader>
        <View
          style={{
            //backgroundColor: "blue",
            alignSelf: "center",
            width: "8%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <BackButton />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 24,
            textAlign: "center",
            //width: screenWidth * 0.8,
            //height: "100%",
            verticalAlign: "bottom",
            color: theme_prop.mainText,
            //backgroundColor: "red",
            flex: 1,
          }}
        >
          Look
        </Text>
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            width: "8%",
          }}
        />
      </DefaultContainerInHeader>
    </HeaderContainer>
  );
};

export default Header;
