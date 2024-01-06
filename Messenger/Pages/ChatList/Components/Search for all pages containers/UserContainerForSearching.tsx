import React from "react";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
import User from "../../../../dao/Models/User";
import { Image, Text } from "react-native";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { View } from "react-native";
import { screenHeight } from "../../Constants/ConstantsForChatlist";

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

  return (
    <View style={{ marginHorizontal: 5, marginTop: 10,flex:1,height:radiusOfImage+5}}>
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
