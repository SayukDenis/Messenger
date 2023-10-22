import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import TopToolBar from "../../SemiComponents/MainScreen/TopToolBar";
import MultimediaBar from "../../SemiComponents/MainScreen/MultimediaBar";
import Blur from "../../SemiComponents/MainScreen/Blur";
import ElseFeaturesButtons from "../../SemiComponents/MainScreen/ElseFeaturesButtonsGroup";
import ClearChatApproval from "../../SemiComponents/MainScreen/ClearChatApproval";
import BioAndLink from "./BioAndLink";
import { user } from "../../SemiComponents/DBUser";

// Data from user

type MainUserPageProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const MainGroupPage: React.FC<MainUserPageProps> = ({ navigation }) => {
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
        primaryTitle={user.Nickname}
        secondaryTitle={user.MembersCount}
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
        settingsClick={() => navigation.navigate("SettingsMenu" as never)}
      />

      {/* Approval to clear chat if clear button is clicked via else features buttons */}
      <ClearChatApproval
        isPressed={isClearChatButtonClicked}
        onAnyPress={() => {
          setIsClearChatButtonClicked(false);
        }}
        onAgreePress={() => {
          alert("Agree");
        }}
      />

      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          left: "38%",
          top: "2%",
        }}
        source={{ uri: user.ImagePath }}
      />

      <BioAndLink />
      {/* Multimedia bar with photo/albums, files, voice, links buttons*/}
      <MultimediaBar
        isLongPressed={isPhotoAlbumSelectionVisible}
        onLongPress={(value) => setIsPhotoAlbumSelectionVisible(value)}
      />
    </View>
  );
};

export default MainGroupPage;
