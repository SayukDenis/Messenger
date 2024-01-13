import React, { Dispatch, SetStateAction, memo, useEffect, useState } from "react";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../../Constants/ConstantsForChatlist";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import Chat from "../../../../../dao/Models/Chats/Chat";
import User from "../../../../../dao/Models/User";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import AddMemberContainerForUser from "./AddMemberContainerForUser";

interface MainForAddMemberPageProps {
  selectedUsers: User[];
  setSelectedUsers: Dispatch<SetStateAction<User[]>>;
}

const MainForAddMemberPage: React.FC<MainForAddMemberPageProps> = ({
  selectedUsers,
  setSelectedUsers,
}) => {
  const chats: Chat[] = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    const chats: Chat[] = self.tabs[0].folders[0].chats;
    //console.log(chats);
    return chats;
  });
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    let users: User[] = [];
    for (let i = 0; i < chats.length; i++) {
      if (chats[i] instanceof Dialogue) {
        const dialogue: Dialogue = chats[i] as Dialogue;
        for (let i = 0; i < dialogue.users.length; i++) {
          if (!(dialogue.users[i] instanceof SelfProfile)) {
            users.push(dialogue.users[i]);
            // console.log(dialogue.users[i].name);
          }
        }
      }
    }
    setUsers(users);
  }, []);
  const onUserPress = (pressedUser: User) => {
    const userIndex = selectedUsers.findIndex((user:User) => user.userId === pressedUser.userId );
  if (userIndex !== -1) {
    setSelectedUsers((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(userIndex, 1);
      return newArray;
    });
  } else {
    setSelectedUsers([...selectedUsers,pressedUser])
  }
  };
  function isUserInArray(selectedUser: User): boolean {
    return selectedUsers.some((user) => user.userId === selectedUser.userId);
  }
  return (
    <ScrollView
      //scrollEnabled={false}
      style={{ marginTop: heightOfHeader }}
    >
      {users.map((user: User, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onUserPress(user);
            }}
            activeOpacity={0.9}
            key={index}
          >
            <AddMemberContainerForUser
              user={users[index]}
              key={index}
              isSelected={isUserInArray(user)}
            />
          </TouchableOpacity>
        );
      })}

      <View style={{ height: screenHeight * 0.06, width: screenWidth }} />
    </ScrollView>
  );
};

export default connect(null)(memo(MainForAddMemberPage));
