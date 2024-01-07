import React from "react";
import { View } from "react-native";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import HeaderForContacts from "./Contacts Page/HeaderForContacts";
import MainForContactsPage from "./Contacts Page/MainForContactsPage";

interface ContactsPageProps {
  navigation: any;
}

const ContactsPage: React.FC<ContactsPageProps> = ({ navigation }) => {
  return (
    <>
      <HeaderForContacts navigation={navigation} />
      <MainForContactsPage />
    </>
  );
};
export default ContactsPage;
