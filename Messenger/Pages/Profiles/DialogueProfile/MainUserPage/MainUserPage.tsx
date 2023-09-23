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
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);

  return (
    <View style={styles.mainContainer}>
      {isPhotoAlbumSelectionVisible === true && (
        <TouchableWithoutFeedback
          onPress={() => {
            setIsPhotoAlbumSelectionVisible(false);
          }}
        >
          <BlurView intensity={10} style={styles.blurEffect} />
        </TouchableWithoutFeedback>
      )}
      <TopToolBar primaryTitle={profileName} secondaryTitle={lastTimeOnline} />

      <AvatarWithCallingButtons AvatarURL={avatarURL} />

      <MultimediaBar
        isPhotoAlbumSelectionVisible={isPhotoAlbumSelectionVisible}
        setIsPhotoAlbumSelectionVisible={setIsPhotoAlbumSelectionVisible}
        photosButtonTitle="Photos"
        albumsButtonTitle="Albums"
        filesButtonTitle="Files"
        voiceButtonTitle="Voice"
        linksButtonTitle="Links"
        videosButtonTitle="Videos"
        photosQuantity={60000}
        videosQuantity={2000}
        albumsQuantity={50}
        filesQuantity={3}
        voiceQuantity={3214}
        linksQuantity={5}
      />
    </View>
  );
};

export default MainUserPage;
