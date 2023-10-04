// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import TopToolBar from "../../SemiComponents/MainScreen/TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import MultimediaBar from "../../SemiComponents/MainScreen/MultimediaBar";
import Blur from "../../SemiComponents/MainScreen/Blur";
import ElseFeaturesButtons from "../../SemiComponents/MainScreen/ElseFeaturesButtons";
import ClearChatApproval from "../../SemiComponents/MainScreen/ClearChatApproval";

// Data from user

var profileName: string = "Олексій Коваленко Володимирович";
var lastTimeOnline: string = "Був online давно";

type MainUserPageProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const MainUserPage: React.FC<MainUserPageProps> = ({ navigation }) => {
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [isClearChatButtonClicked, setIsClearChatButtonClicked] =
    useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

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
        setIsElseFeaturesVisible={(value: boolean) =>
          setIsElseFeaturesVisible(value)
        }
        isMuted={isMuted}
        isBlocked={isBlocked}
        isSearchButtonVisible={true}
      />

      {/* Else features which appear when else features button is pressed*/}
      <ElseFeaturesButtons
        isVisible={isElseFeaturesVisible}
        setIsVisible={(value: boolean) => setIsElseFeaturesVisible(value)}
        isMuted={isMuted}
        setIsMuted={(value: boolean) => {
          setIsMuted(value);
        }}
        isBlocked={isBlocked}
        setIsBlocked={(value: boolean) => {
          setIsBlocked(value);
        }}
        isClearChatButtonClicked={isClearChatButtonClicked}
        setIsClearChatButtonClicked={(value: boolean) => {
          setIsClearChatButtonClicked(value);
        }}
        navigation={navigation}
        settingsClick={() => navigation.navigate("SettingsScreen" as never)}
      />

      {/* Approval to clear chat if clear button is clicked via else features buttons */}
      <ClearChatApproval
        isClearChatButtonClicked={isClearChatButtonClicked}
        setIsClearChatButtonClicked={(value: boolean) => {
          setIsClearChatButtonClicked(value);
        }}
        AgreeClick={() => {
          alert("Agree");
        }}
      />

      {/* Touchable avatar image with phone and videocamera buttons*/}
      <AvatarWithCallingButtons />

      {/* Multimedia bar with photo/albums, files, voice, links buttons*/}
      <MultimediaBar
        isphotoOrAlbumButtonHolding={isPhotoAlbumSelectionVisible}
        photoOrAlbumButtonHolding={(value) =>
          setIsPhotoAlbumSelectionVisible(value)
        }
      />
    </View>
  );
};

export default MainUserPage;
