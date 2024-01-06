import { Text, View } from "react-native";
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

interface MainForContactsPageProps {}

const MainForContactsPage: React.FC<MainForContactsPageProps> = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <BackGroundGradientView>
      <ScrollView>
        <View style={{ height: heightOfHeader, width: screenWidth }} />
        {contacts.map((contact) => {
          return (
            <>
              <ContactContainer contact={contact} />
              <View
                style={{
                  width: screenWidth,
                  height: 2,
                  opacity: 0.1,
                  backgroundColor: "gray",
                }}
              />
          
            </>
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
