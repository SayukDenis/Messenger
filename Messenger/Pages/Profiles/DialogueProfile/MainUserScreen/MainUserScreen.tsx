// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import TopToolBar from "../../SemiComponents/MainScreen/TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import Multimedia from "../../SemiComponents/MainScreen/Multimedia";
import Blur from "../../SemiComponents/MainScreen/Blur";
import ElseFeaturesButtons from "../../SemiComponents/MainScreen/ElseFeaturesButtons";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import { user } from "../../SemiComponents/DBUser";

type MainUserScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const MainUserScreen: React.FC<MainUserScreenProps> = ({ navigation }) => {
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [isClearChatButtonClicked, setIsClearChatButtonClicked] =
    useState(false);
  const [isMuted, setIsMuted] = useState(user.isMuted);
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);

  useEffect(() => {
    user.isBlocked = isBlocked;
    user.isMuted = isMuted;
  });

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
        primaryTitle={user.profileName}
        secondaryTitle={user.lastTimeOnline}
        setIsElseFeaturesVisible={(value: boolean) =>
          setIsElseFeaturesVisible(value)
        }
        isMuted={isMuted}
        isBlocked={isBlocked}
        isSearchButtonVisible={true}
        navigation={navigation}
      />

      {/* Else features which appear when else features button is pressed*/}
      <ElseFeaturesButtons
        isVisible={isElseFeaturesVisible}
        setIsVisible={(value: boolean) => setIsElseFeaturesVisible(value)}
        isMuted={isMuted}
        onMutePress={(value: boolean) => {
          setIsMuted(value);
        }}
        isBlocked={isBlocked}
        onBlockPress={(value: boolean) => {
          setIsBlocked(value);
        }}
        isClearChatPressed={isClearChatButtonClicked}
        onClearChatPress={(value: boolean) => {
          setIsClearChatButtonClicked(value);
        }}
        navigation={navigation}
        settingsPress={() => navigation.navigate("SettingsScreen" as never)}
        mode="user"
      />

      {/* Approval to clear chat if clear button is clicked via else features buttons */}
      <RemovalApproval
        isPressed={isClearChatButtonClicked}
        onAnyPress={() => {
          setIsClearChatButtonClicked(false);
        }}
        onAgreePress={() => {
          alert("Agree");
        }}
        text={user.clearChatText}
      />

      {/* Touchable avatar image with phone and videocamera buttons*/}
      <AvatarWithCallingButtons />

      {/* Multimedia bar with photo/albums, files, voice, links buttons*/}
      <Multimedia
        isLongPressed={isPhotoAlbumSelectionVisible}
        onLongPress={(value) => setIsPhotoAlbumSelectionVisible(value)}
      />
    </View>
  );
};

export default MainUserScreen;
