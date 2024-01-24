import {View } from "react-native";
import React, { useEffect, useState } from "react";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import * as Contacts from "expo-contacts";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import { ScrollView } from "react-native-gesture-handler";
import ContactContainer from "./ContactContainer";
import getAllContacts from "./Functions/GetAllContacts";

interface MainForContactsPageProps {}

const MainForContactsPage: React.FC<MainForContactsPageProps> = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  useEffect(() => {
    getAllContacts().then((data)=>{setContacts(data)})
  }, []);

  return (
    <BackGroundGradientView>
      <ScrollView>
        <View style={{ height: heightOfHeader, width: screenWidth }} />
        {contacts.map((contact, index: number) => {
          return (
            <View key={index}>
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
    </BackGroundGradientView>
  );
};

export default MainForContactsPage;