//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { Touchable, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./Styles";
import TopToolBar from "./TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import MultimediaBar from "./MultimediaBar";
import { BlurView } from "expo-blur";

const avatarURL: string = "https://picsum.photos/id/1084/536/354";
var profileName: string = "ДенисDenis";
var lastTimeOnline: string = "Був online давно";

if (profileName.length > 10) {
  profileName = profileName.slice(0, 10) + "...";
}

const MainUserPage = () => {
  const [isShownAlbumsSelectButton, setIsShownAlbumsSelectButton] =
    useState(false);

  return (
    <View style={styles.mainContainer}>
      {isShownAlbumsSelectButton === true && (
        <TouchableWithoutFeedback
          onPress={() => {
            setIsShownAlbumsSelectButton(false);
          }}
        >
          <BlurView intensity={10} style={styles.blurEffect} />
        </TouchableWithoutFeedback>
      )}
      <TopToolBar primaryTitle={profileName} secondaryTitle={lastTimeOnline} />

      <AvatarWithCallingButtons AvatarURL={avatarURL} />

      <MultimediaBar
        isShownAlbumsSelectButton={isShownAlbumsSelectButton}
        setIsShownAlbumsSelectButton={setIsShownAlbumsSelectButton}
      />
    </View>
  );
};

export default MainUserPage;
