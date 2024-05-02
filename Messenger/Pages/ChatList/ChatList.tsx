import Header from "./Components/Header";
import React, { useEffect } from "react";
import Main from "./Components/Main";
import BackGroundGradientView from "../SemiComponents/BackGroundGradientView";
import { connect, useSelector } from "react-redux";
import { Text, View } from "react-native";

export const booleanForLogging: boolean = false;

interface ChatListProps {
  navigation: any;
  currentTab: number;
}

const ChatList: React.FC<ChatListProps> = ({ navigation, currentTab }) => {
  const selfProfile = useSelector((state: any) => state.selfProfileUser.selfProfile);
  const tabs = selfProfile?.tabs;
  const selectedTab = tabs && tabs[currentTab];

  if (!selectedTab) {
    return <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}><Text>Loading...</Text></View>; 
  }
  return (
    <BackGroundGradientView>
      <Main navigation={navigation} />
      <Header navigation={navigation} />
    </BackGroundGradientView>
  );
};

const mapStateToProps = (state:any) => ({
  currentTab: state.chatListReducer.currentTab.currentTab,
});

export default connect(mapStateToProps)(ChatList);
