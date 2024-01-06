import React from "react";
import * as Contacts from "expo-contacts";
import { Text, View } from "react-native";

import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
interface ContactContainerProps {
  contact: Contacts.Contact;
}

const ContactContainer: React.FC<ContactContainerProps> = ({ contact }) => {
  const getFirstChat = (name: string) => {
    const firstCharacter = name.slice(0, 2);
    const isEmoji = /^[\p{Extended_Pictographic}]/u.test(firstCharacter);
    let result: string;
    if (isEmoji) {
      result = firstCharacter;
    } else {
      result = firstCharacter.slice(0, 1);
    }
    return result;
  };
  const CryptoJS = require('crypto-js');

const generateColorFromPhoneNumber = (phoneNumber) => {
  const cleanedPhoneNumber = phoneNumber?.replace(/^\+/, '');
  const hash = CryptoJS.MD5(cleanedPhoneNumber).toString();
  const r = parseInt(hash.substr(0, 2), 16);
  const g = parseInt(hash.substr(2, 2), 16);
  const b = parseInt(hash.substr(4, 2), 16);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
};
  return (
    <View
      style={{
        flexDirection: "row",
        height: screenHeight * 0.05,

        width: screenWidth,
      }}
    >
      <View
        style={{
          alignSelf: "center",
          width: screenHeight * 0.04,
          height: screenHeight * 0.04,
          justifyContent: "center",
          backgroundColor: generateColorFromPhoneNumber( contact.phoneNumbers?.[0].digits),
          borderRadius: 100,
          marginLeft:10,
        }}
      >
        <Text style={{ alignSelf: "center", fontSize: 20 }}>
          {getFirstChat(contact.name)}
        </Text>
      </View>
      <Text style={{ alignSelf: "center",marginLeft:10 }}>{contact.name}</Text>
    </View>
  );
};
export default ContactContainer;
