import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import * as Contacts from "expo-contacts";
import ContactContainer from "../Contacts Page/ContactContainer";
import TextForDisplayInAlphabeticalOrder from "./TextForDisplayInAlphabeticalOrder";
import getSortContactsAlphabetically from "../Contacts Page/Functions/getSortContacts";
import isFirstCharacterAlphabetic from "../Contacts Page/Functions/isFirstCharacterAlphabetic";
import displayInAlphabeticalOrder from "./Functions/displayInAlphabeticOrder";
import { headerstyles } from "../../Styles/HeaderStyle";
interface MainForWriteMessageProps {
  navigation: any;
}

const MainForWriteMessage: React.FC<MainForWriteMessageProps> = ({
  navigation,
}) => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  useEffect(() => {
    getSortContactsAlphabetically().then((data)=>setContacts(data))
  }, []);


  return (
    <ScrollView style={{ flex: 1, marginTop: heightOfHeader }}>
      {contacts.map((contact, index: number) => {
        return (
          <View key={index} >
            {displayInAlphabeticalOrder(contacts, index)}
            <ContactContainer contact={contact} />
            <View
              style={{
                width: screenWidth,
                height: 2,
                opacity: 0.1,
                backgroundColor: "gray",
              }}
            />
          </View>
        );
      })}
      <View
        style={{
          height: screenHeight * 0.05,

          width: screenWidth,
        }}
      />
    </ScrollView>
  );
};

export default MainForWriteMessage;
