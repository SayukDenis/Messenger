// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import TopToolBar from "../../SemiComponents/MainScreen/TopToolBar";
import Multimedia from "../../SemiComponents/MainScreen/Multimedia/Multimedia";
import Blur from "../../SemiComponents/MainScreen/Blur";
import ElseFeaturesButtons from "../../SemiComponents/MainScreen/ElseFeaturesButtons";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import { Album, tempUser, user } from "../../SemiComponents/DBUser";
import AlbumLongPressedMenu from "../../SemiComponents/MainScreen/Multimedia/AlbumLongPressedMenu";
import BottomToolBar from "../../SemiComponents/MainScreen/ButtomToolBar";

type AvatarsAndInfoScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const AvatarsAndInfoScreen: React.FC<AvatarsAndInfoScreenProps> = ({
  navigation,
}) => {
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

  var blursConditions: boolean[] = [
    isPhotoAlbumSelectionVisible,
    isElseFeaturesVisible,
    isClearChatButtonPressed,
    longPressedAlbum != null,
    isDeleteAlbumPressed,
    isDeleteAllAlbumsPressed,
    isDeleteSelectedAlbumsPressed,
  ];
  var blursOnPress: (() => void)[] = [
    () => {
      setIsPhotoAlbumSelectionVisible(false);
    },
    () => {
      setIsElseFeaturesVisible(false);
    },
    () => {
      setIsClearChatButtonPressed(false);
    },
    () => {
      setLongPressedAlbum(null);
    },
    () => {
      setIsDeleteAlbumPressed(false);
    },
    () => {
      setIsDeleteAllAlbumsPressed(false);
    },
    () => {
      setIsDeleteSelectedAlbumsPressed(false);
    },
  ];

  return (
    <View style={styles.mainContainer}>
      {blursConditions.map((item, index) => (
        <Blur
          key={index}
          visibleWhen={item}
          onPress={() => {
            blursOnPress[index]();
          }}
          style={[
            styles.blurEffect,
            {
              zIndex:
                index == 2 || index == 4 || index == 5 || index == 6 ? 3 : 1,
            },
          ]}
        />
      ))}

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

      {/* Approval to delete all albums */}
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

      {/* Approval to delete selected albums */}
      <RemovalApproval
        isVisible={isDeleteSelectedAlbumsPressed}
        onAnyPress={() => {
          setIsDeleteSelectedAlbumsPressed(false);
        }}
        onAgreePress={() => {
          selectedAlbums.forEach((album) => {
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
          onAlbumPress={(value: Album) => {
            tempUser.selectedAlbum = value;
            navigation.navigate("AlbumFilling" as never);
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

export default AvatarsAndInfoScreen;
