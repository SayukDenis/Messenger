import React, { useEffect } from "react";
import User from "../../../../dao/Models/User";
import { TouchableOpacity, View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import { Text } from "react-native";
import BackGroundColorForComponents from "../../../SemiComponents/BackGroundColorForComponents";
import { Image } from "react-native";
import DeleteSvg from "../SVG/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addUserForCreateGroupOrChannel } from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";

interface ContainerOfSelectedMembersProps {
  user: User;
}

const ContainerOfSelectedMembers: React.FC<ContainerOfSelectedMembersProps> = ({
  user,
}) => {
  const height = screenHeight * 0.05;
  const width = screenWidth * 0.94;
  const dispatch = useDispatch();
  const selectedUsers: User[] = useSelector((state: any) => {
    return state.chatListReducer.createGroupOrChannel.selectedUsers;
  });
  const onUserPress = (user: User) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.userId !== user.userId
    );
    dispatch(addUserForCreateGroupOrChannel(updatedUsers));
  };
  
  return (
    <View
      style={{
        flexDirection: "row",
        height,
        width,
        justifyContent: "space-between",
        alignSelf: "center",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 2,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: user.linkToPhoto }}
          style={{
            height: height * 0.7,
            alignSelf: "center",
            aspectRatio: 1,
            borderRadius: height,
            marginLeft: 10,
          }}
        />
        <Text style={{ alignSelf: "center", marginLeft: 8, fontSize: 14.5 }}>
          {user.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          height,
          //backgroundColor: "black",
          width: width * 0.1,
        }}
        onPress={() => {
          onUserPress(user);
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <DeleteSvg
            width={screenWidth * 0.034}
            height={screenHeight * 0.03}
            color={"#CE2500"}
          />
        </View>
      </TouchableOpacity>
      <BackGroundColorForComponents height={height} width={width} />
    </View>
  );
};
export default ContainerOfSelectedMembers;
