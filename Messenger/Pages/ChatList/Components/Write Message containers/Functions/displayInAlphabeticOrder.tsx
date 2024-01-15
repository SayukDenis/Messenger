import React from "react";
import * as Contacts from "expo-contacts";
import { ReactNode } from "react";
import TextForDisplayInAlphabeticalOrder from "../TextForDisplayInAlphabeticalOrder";
import isFirstCharacterAlphabetic from "../../Contacts Page/Functions/isFirstCharacterAlphabetic";
const displayInAlphabeticalOrder = (
    contacts: Contacts.Contact[],
    index: number
  ): ReactNode => {
    let content: ReactNode = null;
    if (index == 0 && !isFirstCharacterAlphabetic(contacts[index].name)) {
      return <TextForDisplayInAlphabeticalOrder text={"#"} />;
    } else if (index == 0) {
      return (
        <TextForDisplayInAlphabeticalOrder
          text={contacts[index].name.slice(0, 1)}
        />
      );
    } else if (
      !isFirstCharacterAlphabetic(contacts[index].name) &&
      isFirstCharacterAlphabetic(contacts[index - 1].name)
    ) {
      return <TextForDisplayInAlphabeticalOrder text={"#"} />;
    } else if (
      !isFirstCharacterAlphabetic(contacts[index].name) &&
      !isFirstCharacterAlphabetic(contacts[index - 1].name)
    ) {
      return null;
    } else if (
      contacts[index].name.slice(0, 1) != contacts[index - 1].name.slice(0, 1)
    ) {
      return (
        <TextForDisplayInAlphabeticalOrder
          text={contacts[index].name.slice(0, 1)}
        />
      );
    }
    return content;
  };

  export default displayInAlphabeticalOrder