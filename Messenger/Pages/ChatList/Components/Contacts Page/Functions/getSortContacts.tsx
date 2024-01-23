import { Contact } from "expo-contacts";
import getAllContacts from "./GetAllContacts";
import isFirstCharacterAlphabetic from "./isFirstCharacterAlphabetic";

const getSortContactsAlphabetically = async ():Promise<Contact[]> => {
  const contacts = await getAllContacts();

  if (contacts.length > 0) {
    // Custom sorting logic
    const sortedContacts = contacts.sort((a, b) => {
      const nameA = (a.name?.charAt(0) || "").toUpperCase();
      const nameB = (b.name?.charAt(0) || "").toUpperCase();

      if (
        !isFirstCharacterAlphabetic(nameA) &&
        isFirstCharacterAlphabetic(nameB)
      ) {
        return 1;
      } else if (
        isFirstCharacterAlphabetic(nameA) &&
        !isFirstCharacterAlphabetic(nameB)
      ) {
        return -1;
      } else {
        return nameA.localeCompare(nameB);
      }
    });

    return sortedContacts;
  } else {
    return [];
  }
};

export default getSortContactsAlphabetically;