import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./ProfileGroupStyles"; // Адаптувати шлях до правильного файлу
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GroupHead } from "./GroupHeadProfile";
import { GroupBio } from "./GroupBio";
import { UserProps, user } from "../../SemiComponents/DBUser";
import { GroupName } from "./GroupNameInput";
import { EditGroupPhoto } from "./EditGroupPhoto";
import { User } from "./UserProfile";

export default function EditGroup() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [GroupHeadNameExample, setGroupHeadNameExample] = useState("");
  const [bioTextExample, setBioTextExample] = useState("");
  const [menuVisible, setMenuVisible] = useState(false); // Початково приховане меню
  const [GroupNameExample, setGroupNameExample] = useState("");
  const [GroupImage, setGroupImage] = useState(
    "https://picsum.photos/id/237/536/354"
  );

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <GroupHead setGroupHeadNameExample={setGroupHeadNameExample} />
        <EditGroupPhoto />
        <GroupName setGroupNameExample={setGroupNameExample} />
        <GroupBio setBioTextExample={setBioTextExample} />
        <User ImagePath={user.ImagePath} Nickname={user.Nickname} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
