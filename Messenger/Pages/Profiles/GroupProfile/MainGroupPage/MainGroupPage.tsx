import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import TopToolBar from "../../SemiComponents/MainScreen/TopToolBar";
import Multimedia from "../../SemiComponents/MainScreen/Multimedia/Multimedia";
import Blur from "../../SemiComponents/Blur";
import ElseFeaturesButtons from "../../SemiComponents/MainScreen/ElseFeaturesButtons";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import BioAndLink from "./BioAndLink";
import {
  Album,
  PhotoOrVideo,
  tempUser,
  user,
} from "../../SemiComponents/DBUser";
import { GestureResponderEvent } from "react-native-modal";

const screenHeight = Dimensions.get("screen").height;

type MainUserPageProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const MainGroupPage: React.FC<MainUserPageProps> = ({ navigation }) => {
  const [removalApprovalText, setRemovalApprovalText] = useState("");
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [isClearChatButtonClicked, setIsClearChatButtonClicked] =
    useState(false);
  const [isMuted, setIsMuted] = useState(user.isMuted);
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);
  const [longPressedAlbum, setLongPressedAlbum] = useState(null);
  const [positionYOfLongPressedAlbum, setPositionYOfLongPressedAlbum] =
    useState(0);
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");
  const [isAlbumSelectionVisible, setIsAlbumSelectionVisible] = useState(false);
  const [selectedAlbums, setSelectedAlbums] = useState<Array<Album>>([]);

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
        onElseFeaturesPress={() => {
          setIsElseFeaturesVisible(true);
        }}
        isMuted={isMuted}
        isBlocked={isBlocked}
        isSearchButtonVisible={true}
        onGoBackPress={() => {
          navigation.goBack();
        }}
        isMediaSelectionVisible={isAlbumSelectionVisible}
        quantityOfSelectedItems={selectedAlbums.length}
        onCancelPress={() => {
          setSelectedAlbums([]);
          setIsAlbumSelectionVisible(false);
        }}
        onDeleteAllPress={() => {
          setRemovalApprovalText("delete all albums");
        }}
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
        onClearChatPress={() => {
          setRemovalApprovalText("clear the chat");
        }}
        settingsPress={() => navigation.navigate("SettingsMenu" as never)}
        mode="group"
      />

      {/* Approval to clear chat if clear button is clicked via else features buttons */}
      <RemovalApproval
        isVisible={isClearChatButtonClicked}
        onAnyPress={() => {
          setIsClearChatButtonClicked(false);
        }}
        onAgreePress={() => {
          alert("Agree");
        }}
        text="Do you really want to delete a chat?"
      />
      <ScrollView
        style={{
          flex: 1,
          zIndex: isPhotoAlbumSelectionVisible ? 2 : 0,
        }}
        contentContainerStyle={{
          zIndex: isPhotoAlbumSelectionVisible ? 2 : 0,
        }}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        onScroll={() => {
          setIsPhotoAlbumSelectionVisible(false);
        }}
      >
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
        <Multimedia
          isPhotoAlbumSelectionVisible={isPhotoAlbumSelectionVisible}
          setIsPhotoAlbumSelectionVisible={(value: boolean) =>
            setIsPhotoAlbumSelectionVisible(value)
          }
          pressedMultimediaButton={pressedMultimediaButton}
          setPressedMultimediaButton={(value: string) => {
            setPressedMultimediaButton(value);
          }}
          onPhotoPress={(photo: PhotoOrVideo) => {
            tempUser.selectedPhoto = photo;
            navigation.navigate("PhotoScreen" as never);
          }}
          onAlbumPress={(item: Album) => {
            if (isAlbumSelectionVisible) {
              if (!selectedAlbums.includes(item)) {
                setSelectedAlbums(selectedAlbums.concat([item]));
              } else {
                setSelectedAlbums(
                  selectedAlbums.filter((photoOrVideo) => photoOrVideo !== item)
                );
              }
            } else {
              tempUser.selectedAlbum = item;
              navigation.navigate("Album" as never);
            }
          }}
          onNewAlbumPress={() => {
            navigation.navigate("NewAlbumScreen" as never);
          }}
          onAlbumLongPress={(value: Album, event: GestureResponderEvent) => {
            if (!isAlbumSelectionVisible) {
              setLongPressedAlbum(value);
              setPositionYOfLongPressedAlbum(
                event.nativeEvent.pageY + 0.05 * screenHeight
              );
            } else {
              if (!selectedAlbums.includes(value)) {
                setSelectedAlbums(selectedAlbums.concat([value]));
              } else {
                setSelectedAlbums(
                  selectedAlbums.filter(
                    (photoOrVideo) => photoOrVideo !== value
                  )
                );
              }
            }
          }}
          isAlbumSelectionVisible={isAlbumSelectionVisible}
          isAlbumCheckMarkVisible={(value: Album) => {
            return selectedAlbums.includes(value);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MainGroupPage;
