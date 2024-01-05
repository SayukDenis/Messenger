import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import Contacts from 'react-native-contacts';
import { screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";

interface MainForSearchForAllPagesProps {}

const MainForSearchForAllPages: React.FC<MainForSearchForAllPagesProps> = () => {
  const [contacts, setContacts] = useState([] as any[]); // Initialize contacts state

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    Contacts.getAll().then((contacts)=>{
      setContacts(contacts)
    })
  };
  return (
    <BackGroundGradientView>
      {contacts.map((contact)=>{
        return (<View >
          <Text>{contact.}</Text>
        </View>)
      })}
    </BackGroundGradientView>
  );
};

export default MainForSearchForAllPages;