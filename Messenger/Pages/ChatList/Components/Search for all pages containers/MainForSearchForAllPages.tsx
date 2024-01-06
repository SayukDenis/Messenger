import { Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import * as Contacts from "expo-contacts";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
import UserContainerForSearching from "./UserContainerForSearching";

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
      <View style={{ height: heightOfHeader, width: screenWidth }} />
      <View
        style={{
          height: screenHeight * 0.08 + 10 + 5 + 14,
          width: screenWidth,
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {chats.map((chat, index) => (
            <UserContainerForSearching dialogue={chat} key={index} />
          ))}
        </ScrollView>
      </View>
    </BackGroundGradientView>
  );
};

export default MainForSearchForAllPages;
