import React, { Dispatch, SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import DefaultContainerInHeader from "../../../SemiComponents/DefaultContainerInHeader";
import BackButton from "../../../SemiComponents/BackButton";
import {
  screenHeight,
  screenWidth,
} from "../../../ChatList/Constants/ConstantsForChatlist";
import MagnifyingGlass from "../../../ChatList/Components/Headers containers/MagnifyingGlass";
import { TextInput } from "react-native-gesture-handler";

interface HeaderForCountrySelectPageProps {
  navigation: any;
  setInputForCountry: Dispatch<SetStateAction<string>>;
  inputForCountry: string;
}

const HeaderForCountrySelectPage: React.FC<HeaderForCountrySelectPageProps> = ({
  navigation,
  setInputForCountry,
  inputForCountry,
}) => {
  const colorInTextInput = "#888282";
  const pressOnBackButton = () => {
    navigation.goBack();
  };
  return (
    <HeaderContainer>
      <DefaultContainerInHeader>
        <TouchableOpacity
          onPress={pressOnBackButton}
          style={{ alignSelf: "center", }}
        >
          <BackButton />
        </TouchableOpacity>
        <View
          style={{
            width: screenWidth * 0.8,
            height: screenHeight * 0.04,
            backgroundColor: "#272727",
            // backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 100,
            flexDirection: "row",
            marginLeft:8
          }}
        >
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginLeft: 10,
              flexDirection: "row",
              //backgroundColor: "red",
            }}
          >
            <MagnifyingGlass
              height={screenHeight * 0.025}
              width={screenWidth * 0.045}
              color={colorInTextInput}
            />
            <View
              style={{
                height: screenHeight * 0.025,
                width: 1,
                backgroundColor: colorInTextInput,
                marginHorizontal: 4,
                alignSelf: "center",
              }}
            />
          </View>

          <TextInput
            placeholder="Search"
            placeholderTextColor={colorInTextInput}
            style={{
             // backgroundColor: "white",
              width: screenWidth * 0.65,
              color: colorInTextInput,
              fontSize: 18,
              marginLeft:1
            }}
            value={inputForCountry}
            onChangeText={setInputForCountry}
          />
        </View>
      </DefaultContainerInHeader>
    </HeaderContainer>
  );
};

export default HeaderForCountrySelectPage;
