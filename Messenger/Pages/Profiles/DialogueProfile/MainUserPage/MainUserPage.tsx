// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./Styles";
import TopToolBar from "./TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import MultimediaBar from "./MultimediaBar";
import Blur from "./Blur";

// Data from user
const avatarURL: string = "https://picsum.photos/id/1084/536/354";
var profileName: string = "Олексій Коваленко Володимирович";
var lastTimeOnline: string = "Був online давно";

const MainUserPage = () => {
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [isClearChatButtonClicked, setIsClearChatButtonClicked] =
    useState(false);

  return (
    <View style={styles.mainContainer}>
      {/* Blur if photo or album button is on long press */}
      <Blur
        visibleWhen={isPhotoAlbumSelectionVisible}
        onPress={() => {
          setIsPhotoAlbumSelectionVisible(false);
        }}
        style={styles.blurEffect}
      />

      {/* Blur if else features button is pressed */}
      <Blur
        visibleWhen={isElseFeaturesVisible === true}
        onPress={() => {
          setIsElseFeaturesVisible(false);
        }}
        style={styles.blurEffect}
      />

      {/* Blur if clear chat is pressed */}
      <Blur
        visibleWhen={isClearChatButtonClicked === true}
        onPress={() => {
          setIsClearChatButtonClicked(false);
        }}
        style={[styles.blurEffect, { zIndex: 3 }]}
      />

      {/* Top tool bar with buttons*/}
      <TopToolBar
        primaryTitle={profileName}
        secondaryTitle={lastTimeOnline}
        elseFeaturesVisible={isElseFeaturesVisible === true}
        elseFeaturesPressing={(value: boolean) =>
          setIsElseFeaturesVisible(value)
        }
        setIsClearChatClicked={(value) => setIsClearChatButtonClicked(value)}
        isClearChatClicked={isClearChatButtonClicked}
      />

      {/* Touchable avatar image with phone and videocamera buttons*/}
      <AvatarWithCallingButtons AvatarURL={avatarURL} />

      {/* Multimedia bar with photo/albums, files, voice, links buttons*/}
      <MultimediaBar
        isphotoOrAlbumButtonHolding={isPhotoAlbumSelectionVisible}
        photoOrAlbumButtonHolding={(value) =>
          setIsPhotoAlbumSelectionVisible(value)
        }
        photosButtonTitle="Photos"
        albumsButtonTitle="Albums"
        filesButtonTitle="Files"
        voiceButtonTitle="Voice"
        linksButtonTitle="Links"
        videosButtonTitle="Videos"
        photosQuantity={600}
        videosQuantity={20}
        albumsQuantity={50}
        filesQuantity={3}
        voiceQuantity={3214}
        linksQuantity={5}
      />
    </View>
  );
};

export default MainUserPage;
