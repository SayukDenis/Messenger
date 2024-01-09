import React, { useEffect, useState } from "react";
import { heightOfHeader } from "../../../Constants/ConstantsForChatlist";
import { ScrollView } from "react-native";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import Chat from "../../../../../dao/Models/Chats/Chat";
import User from "../../../../../dao/Models/User";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import AddMemberContainerForUser from "./AddMemberContainerForUser";

interface MainForAddMemberPageProps {}

const MainForAddMemberPage: React.FC<MainForAddMemberPageProps> = ({}) => {
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
            console.log(dialogue.users[i].name);
          }
        }
      }
    }
    setUsers(users);
  }, []);
  return (
    <ScrollView
      //scrollEnabled={false}
      style={{ marginTop: heightOfHeader }}
    >
      {users.map((user: User, index: number) => (
        <AddMemberContainerForUser user={users[index]} key={index} />
      ))}
    </ScrollView>
  );
};

export default connect(null)(MainForAddMemberPage);
