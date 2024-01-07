import React from "react";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
import User from "../../../../dao/Models/User";
import { Image, Text } from "react-native";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { View } from "react-native";
import { screenHeight } from "../../Constants/ConstantsForChatlist";
import { CountOfMessages } from "../List of folders containers/Functions/CountOfMessages";
import CountOfUnreadMessageOnFolderComponent from "../Footer containers/CountOfUnreadMessageOnFolderComponent";
import { CountOfUnreadMessages } from "../List of folders containers/Functions/CountOfUnreadMessage";
import Chat from "../../../../dao/Models/Chats/Chat";
import { useSelector } from "react-redux";

interface UserContainerForSearchingProps {
  dialogue: Dialogue;
}

const UserContainerForSearching: React.FC<UserContainerForSearchingProps> = ({
  dialogue,
}) => {
  const radiusOfImage = screenHeight * 0.07;
  const otherUser: User|undefined = dialogue.users.find(
    (user) => user instanceof User && !(user instanceof SelfProfile)
  );
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const countOfMessage=CountOfUnreadMessages(selfProfile,dialogue)
  return (
    <View style={{ marginHorizontal: 5, marginTop: 10,flex:1,height:radiusOfImage+5}}>
      <View style={{position:"absolute",zIndex:10,right:-5}}>
      {countOfMessage!==null?CountOfMessages(countOfMessage,"#99AFFF","#2B1D1D",1):null}
      </View>
      <Image
        source={{ uri: otherUser?.linkToPhoto }}
        style={{
            
          width: radiusOfImage,
          height: radiusOfImage,
          borderRadius: 100,
          marginBottom: 5,
        }}
      />
      {otherUser ? (
        <Text style={{ alignSelf: "center",fontSize:14 }}>{otherUser.name}</Text>
      ) : null}
    </View>
  );
};
export default UserContainerForSearching;
