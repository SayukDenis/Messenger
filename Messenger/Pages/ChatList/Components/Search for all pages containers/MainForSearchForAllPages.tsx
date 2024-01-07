import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import Contacts from 'react-native-contacts';
import { screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";

interface MainForSearchForAllPagesProps {}

const MainForSearchForAllPages: React.FC<
  MainForSearchForAllPagesProps
> = () => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const chats = selfProfile.tabs[0].folders[0].chats.filter(
    (chat) => chat instanceof Dialogue
  ) as Dialogue[];
 
  return (
    <BackGroundGradientView>
      {contacts.map((contact)=>{
        return (<View >
       
        </View>)
      })}
    </BackGroundGradientView>
  );
};

export default MainForSearchForAllPages;