// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import TopToolBar from "../../SemiComponents/MainScreen/TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import Multimedia from "../../SemiComponents/MainScreen/Multimedia/Multimedia";
import Blur from "../../SemiComponents/MainScreen/Blur";
import ElseFeaturesButtons from "../../SemiComponents/MainScreen/ElseFeaturesButtons";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import { Album, user } from "../../SemiComponents/DBUser";
import AlbumLongPressedMenu from "../../SemiComponents/MainScreen/Multimedia/AlbumLongPressedMenu";
import BottomToolBar from "../../SemiComponents/MainScreen/ButtomToolBar";

type MainUserScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const MainUserScreen: React.FC<MainUserScreenProps> = ({ navigation }) => {
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [isClearChatButtonPressed, setIsClearChatButtonPressed] =
    useState(false);
  const [isMuted, setIsMuted] = useState(user.isMuted);
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);
  const [longPressedAlbum, setLongPressedAlbum] = useState(null);
  const [positionYOfLongPressedAlbum, setPositionYOfLongPressedAlbum] =
    useState(0);
  const [isDeleteAlbumPressed, setIsDeleteAlbumPressed] = useState(false);
  const [isAlbumSelectionVisible, setIsAlbumSelectionVisible] = useState(false);
  const [selectedAlbums, setSelectedAlbums] = useState<Array<Album>>([]);
  const [isDeleteAllAlbumsPressed, setIsDeleteAllAlbumsPressed] =
    useState(false);
  const [isDeleteSelectedAlbumsPressed, setIsDeleteSelectedAlbumsPressed] =
    useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

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
        visibleWhen={isElseFeaturesVisible}
        onPress={() => {
          setIsElseFeaturesVisible(false);
        }}
        style={styles.blurEffect}
      />

      {/* Blur if clear chat is pressed */}
      <Blur
        visibleWhen={isClearChatButtonPressed}
        onPress={() => {
          setIsClearChatButtonPressed(false);
        }}
        style={[styles.blurEffect, { zIndex: 3 }]}
      />

      {/* Blur if some album is long pressed */}
      <Blur
        visibleWhen={longPressedAlbum != null}
        onPress={() => {
          setLongPressedAlbum(null);
        }}
        style={styles.blurEffect}
      />

      {/* Blur if album removal pressed */}
      <Blur
        visibleWhen={isDeleteAlbumPressed}
        onPress={() => {
          setIsDeleteAlbumPressed(false);
        }}
        style={[styles.blurEffect, { zIndex: 3 }]}
      />

      {/* Blur if all albums removal pressed */}
      <Blur
        visibleWhen={isDeleteAllAlbumsPressed}
        onPress={() => {
          setIsDeleteAllAlbumsPressed(false);
        }}
        style={[styles.blurEffect, { zIndex: 3 }]}
      />

      {/* Blur if all albums removal pressed */}
      <Blur
        visibleWhen={isDeleteSelectedAlbumsPressed}
        onPress={() => {
          setIsDeleteSelectedAlbumsPressed(false);
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
        onGoBackPress={() => {
          navigation.goBack();
        }}
        isAlbumSelectionVisible={isAlbumSelectionVisible}
        quantityOfSelectedItems={selectedAlbums.length}
        onCancelPress={() => {
          setSelectedAlbums([]);
          setIsAlbumSelectionVisible(false);
        }}
        onDeleteAllPress={() => {
          setIsDeleteAllAlbumsPressed(true);
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
        isClearChatPressed={isClearChatButtonPressed}
        onClearChatPress={(value: boolean) => {
          setIsClearChatButtonPressed(value);
        }}
        navigation={navigation}
        settingsPress={() => navigation.navigate("SettingsScreen" as never)}
        mode="user"
      />

      {/* Approval to clear chat if clear button is pressed via else features buttons */}
      <RemovalApproval
        isVisible={isClearChatButtonPressed}
        onAnyPress={() => {
          setIsClearChatButtonPressed(false);
        }}
        onAgreePress={() => {
          alert("Agree");
        }}
        text={user.clearChatText}
      />

      {/* Approval to delete an album */}
      <RemovalApproval
        isVisible={isDeleteAlbumPressed}
        onAnyPress={() => {
          setIsDeleteAlbumPressed(false);
        }}
        onAgreePress={() => {
          user.albums.splice(user.albums.indexOf(longPressedAlbum), 1);
          setLongPressedAlbum(null);
        }}
        text="Do you really want to delete an album?"
      />

      {/* Approval to delete an album */}
      <RemovalApproval
        isVisible={isDeleteAllAlbumsPressed}
        onAnyPress={() => {
          setIsDeleteAllAlbumsPressed(false);
        }}
        onAgreePress={() => {
          user.albums = Array<Album>();
          setIsAlbumSelectionVisible(false);
        }}
        text="Do you really want to delete all albums?"
      />

      {/* Approval to delete selected albuma */}
      <RemovalApproval
        isVisible={isDeleteSelectedAlbumsPressed}
        onAnyPress={() => {
          setIsDeleteSelectedAlbumsPressed(false);
        }}
        onAgreePress={() => {
          console.log(selectedAlbums.length);
          selectedAlbums.forEach((album) => {
            console.log(album.name);
            user.albums.splice(user.albums.indexOf(album), 1);
          });
          setSelectedAlbums(Array<Album>());
          setIsAlbumSelectionVisible(false);
        }}
        text="Do you really want to delete selected albums?"
      />

      <AlbumLongPressedMenu
        isVisible={longPressedAlbum != null}
        longPressedAlbum={longPressedAlbum}
        positionYOfLongPressedAlbum={positionYOfLongPressedAlbum}
        onDeleteAlbumPress={() => {
          setIsDeleteAlbumPressed(true);
        }}
        onSelectAlbumPress={() => {
          setIsAlbumSelectionVisible(true);
          setLongPressedAlbum(null);
        }}
      />

      <BottomToolBar
        isVisible={isAlbumSelectionVisible}
        onDeletePress={() => {
          setIsDeleteSelectedAlbumsPressed(true);
        }}
        onForwardPress={() => {
          alert("Forward album...");
        }}
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
        <Blur
          visibleWhen={isPhotoAlbumSelectionVisible}
          onPress={() => {
            setIsPhotoAlbumSelectionVisible(false);
          }}
          style={[styles.blurEffect, { zIndex: 3 }]}
        />

        {/* Touchable avatar image with phone and videocamera buttons*/}
        <AvatarWithCallingButtons />

        {/* Multimedia bar with photo/albums, files, voice, links buttons*/}
        <Multimedia
          isLongPressed={isPhotoAlbumSelectionVisible}
          setIsPhotoAlbumSelectionVisible={(value: boolean) =>
            setIsPhotoAlbumSelectionVisible(value)
          }
          pressedMultimediaButton={pressedMultimediaButton}
          setPressedMultimediaButton={(value: string) => {
            setPressedMultimediaButton(value);
          }}
          onNewAlbumPress={() => {
            navigation.navigate("NewAlbumScreen" as never);
          }}
          setLongPressedAlbum={(value: Album) => {
            setLongPressedAlbum(value);
          }}
          setPositionYOfLongPressedAlbum={(value: number) =>
            setPositionYOfLongPressedAlbum(value)
          }
          isAlbumSelectionVisible={isAlbumSelectionVisible}
          selectedAlbums={selectedAlbums}
          setSelectedAlbums={(value: Array<Album>) => setSelectedAlbums(value)}
        />
      </ScrollView>
    </View>
  );
};

export default MainUserScreen;
