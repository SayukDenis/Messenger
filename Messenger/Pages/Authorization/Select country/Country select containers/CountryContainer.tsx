import React from "react";
import { CountryCode, countryProps } from "./CountryNames";
import { Text, View } from "react-native";
import CountryFlagEmoji from "./CountryFlagEmoji";
import {
  screenHeight,
  screenWidth,
} from "../../../ChatList/Constants/ConstantsForChatlist";
import { height } from "../../../Chats/Dialogue/DialogueConstants";

interface CountryContainerProps {
  country: countryProps;
}

const CountryContainer: React.FC<CountryContainerProps> = ({ country }) => {
    const fontSize=18;
  return (
    <View>
      <View
        style={{
          width: screenWidth * 0.95,
          height: screenHeight * 0.05,
          flexDirection: "row",
          //backgroundColor: "white",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            width: screenWidth * 0.115,
            height: screenHeight * 0.05,
            //backgroundColor: "red",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <CountryFlagEmoji code={country.code as CountryCode} />
          </View>
          
        </View>
        <View
            style={{
              height: screenHeight * 0.035,
              width: 1,
              backgroundColor: "white",
              alignSelf: "center",
              marginRight:6
            }}
          />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            alignSelf: "center",
            color: "white",
            fontSize,
           //backgroundColor: "black",
            width: screenWidth * 0.645+6,
          
            
          }}
        >
          {country.label}
        </Text>
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            width: screenWidth * 0.15,
          }}
        >
          <Text
            style={{
                alignSelf:"center",
              color: "white",
              fontSize,
              //backgroundColor: "red",
            }}
          >{`+${country.phone}`}</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: screenWidth * 0.95,
          backgroundColor: "white",
          alignSelf: "center",
        }}
      />
    </View>
  );
};
export default CountryContainer;
