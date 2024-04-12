import React from "react";
import { Text, View } from "react-native";
import { screenHeight } from "../../ChatList/Constants/ConstantsForChatlist";
import PhoneSVG from "./PhoneSVG";

const PhoneContainer = () => {
  return (
    <>
      <View
        style={{
          alignSelf: "center",
          marginTop: screenHeight* 0.07,
        }}
      >
        <PhoneSVG />
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            color: "white",
            marginTop: 15,
          }}
        >
          {"Phone number"}
        </Text>
      </View>
    </>
  );
};
export default PhoneContainer;