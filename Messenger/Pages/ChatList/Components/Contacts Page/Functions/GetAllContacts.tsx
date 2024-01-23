
import * as Contacts from "expo-contacts";

const getAllContacts= async ():Promise<Contacts.Contact[]> => {
    const { status } = await Contacts.requestPermissionsAsync();

  if (status === "granted") {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });
    return data || [];
  } else {
    return [];
  }
}
export default getAllContacts