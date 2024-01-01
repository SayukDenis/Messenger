import React, { useEffect, useState } from "react";
import Chat from "../../../../dao/Models/Chats/Chat";
import ChatContainer from "./ChatContainer";
import { connect } from "react-redux";
import { Animated, Easing, Dimensions, FlatList } from "react-native";
interface ListOfBranchesProps {
  chat: Chat;
  nesting: number;
  setBranchOpen:()=>void;
  stateForBranchesShow:boolean;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ListOfBranches: React.FC<ListOfBranchesProps> = ({ chat, nesting,setBranchOpen,stateForBranchesShow }) => {
  const arrayOfBranchesValues = Array.from(
    { length: chat.branches.length },
    (_, index) => useState(new Animated.Value(0))
  );
  const durationOfAnimation: number = 75*1;
  const translateYOfContainers = arrayOfBranchesValues.map(
    (animatedValue, index) => {
      return animatedValue[0].interpolate({
        inputRange: [0, 1],
        outputRange: [-screenHeight*0.08, 0],
      });
    }
  );
  const animationsForBranches = arrayOfBranchesValues.map(
    (animatedValue, index) => {
      return Animated.timing(animatedValue[0], {
        toValue: +stateForBranchesShow,
        easing: Easing.linear,
        duration: durationOfAnimation,
        useNativeDriver: false,
      });
    }
  );
  useEffect(()=>{
    Animated.sequence(stateForBranchesShow?animationsForBranches:animationsForBranches.slice().reverse()).start(() => {
      if(!stateForBranchesShow){
        setBranchOpen();
      }
    });
  },[stateForBranchesShow])

  return (
    <FlatList
      data={chat.branches}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Animated.View
          style={{
            transform: [{ translateY: translateYOfContainers[index] }],opacity:arrayOfBranchesValues[index][0]
          }}
        >
          <ChatContainer chat={item} nesting={nesting} />
        </Animated.View>
      )}
    />
  );
};
export default connect(null)(ListOfBranches);
