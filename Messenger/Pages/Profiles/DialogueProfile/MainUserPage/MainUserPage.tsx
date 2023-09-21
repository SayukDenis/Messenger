//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import TopToolBar from "./TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import MultimediaBar from "./MultimediaBar";

const avatarURL: string = "https://picsum.photos/id/1084/536/354";
var profileName: string = "ДенисDenis";
var lastTimeOnline: string = "Був online давно";

if (profileName.length > 10) {
  profileName = profileName.slice(0, 10) + "...";
}

const MainUserPage = () => {
  return (
    <View style={styles.mainContainer}>
      <TopToolBar profileName={profileName} lastTimeOnline={lastTimeOnline} />

      <AvatarWithCallingButtons AvatarURL={avatarURL} />

      <MultimediaBar />
    </View>
  );
};

export default MainUserPage;
