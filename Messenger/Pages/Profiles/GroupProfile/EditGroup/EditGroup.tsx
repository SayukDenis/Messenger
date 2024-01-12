import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GroupHead } from "./GroupHeadProfile";
import { GroupBio } from "./GroupBio";
import { UserProps, user } from "../../SemiComponents/DBUser";
import { GroupNameInput } from "./GroupNameInput";
import { EditGroupPhoto } from "./EditGroupPhoto";
import { User } from "./UserProfile";

export default function EditGroup() {
  const [groupHeadName, setGroupHeadName] = useState(user.profileName);
  const [BioText, setBioText] = useState(user.GroupBio);
  const [menuVisible, setMenuVisible] = useState(false);
  const [GroupImage, setGroupImage] = useState(
    "https://picsum.photos/id/237/536/354"
  );

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <GroupHead GroupHeadName={groupHeadName} BioText={BioText} />
        <ScrollView>
          <EditGroupPhoto />
          <GroupNameInput
            setGroupHeadName={(value: string) => setGroupHeadName(value)}
          />
          <GroupBio setBioText={(value: string) => setBioText(value)} />
          <User {...user} />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
