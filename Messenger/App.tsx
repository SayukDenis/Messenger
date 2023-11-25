import { View, StyleSheet, Text } from "react-native";
import React from "react";
import IMessageLog from "./dao/Models/Chats/IMessageLog";
import User from "./dao/Models/User";
import IUserReaction from "./dao/Models/IUserReaction ";
import ILastWathedMessage from "./dao/Models/Chats/ILastWathedMessage";
import Group from "./dao/Models/Chats/Group";
import Branch from "./dao/Models/Chats/Branch";
import AuditLog from "./dao/Models/Chats/AuditLog";
import { main } from "./dao/dao/generate/main";
export default function App() {

  main();

  return (
    <View style={style.container}>
      <Text >Start working!</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: -20,
  }
});

function testk() {
  const obj: IMessageLog = { sendTime: new Date(), message: 'hello world ' };
  const reaction: IUserReaction = { user: new User(), value: 'happy' };
  //const list = {
  //numbers: 
  //}
  //console.log(JSON.stringify());
  //console.log(typeof ({} as ILastWathedMessage));
  //console.log(({} as ILastWathedMessage).constructor);
}