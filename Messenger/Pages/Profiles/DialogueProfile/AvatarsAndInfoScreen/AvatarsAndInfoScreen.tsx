// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import Multimedia from "../../SemiComponents/MainScreen/Multimedia/Multimedia";
import Blur from "../../SemiComponents/MainScreen/Blur";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import { Album, tempUser, user } from "../../SemiComponents/DBUser";
import AlbumLongPressedMenu from "../../SemiComponents/MainScreen/Multimedia/AlbumLongPressedMenu";
import BottomToolBar from "../../SemiComponents/MainScreen/ButtomToolBar";
import AvatarsNameAndGoBackButton from "./AvatarsNameAndGoBackButton";
import TopMenuWhenSelection from "../../SemiComponents/TopMenuWhenSelection";
import NumberUsernameAndBio from "./NumberUsernameAndBio";
import CurrentAvatarBar from "./CurrentAvatarBar";
import AnimatedMessageAboutCopying from "./AnimatedMessageAboutCopying";
import CallingMenu from "./CallingMenu";
import { GestureResponderEvent } from "react-native-modal";

const screenHeight = Dimensions.get("screen").height;

type AvatarsAndInfoScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const AvatarsAndInfoScreen: React.FC<AvatarsAndInfoScreenProps> = ({
  navigation,
}) => {
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
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
  const [currentAvatar, setCurrentAvatar] = useState(user.avatars[0]);
  const [isAnyTextCopied, setIsAnyTextCopied] = useState(false);
  const [phoneUsernameOrBioCopied, setPhoneUsernameOrBioCopied] = useState("");
  const [isNumberPressed, setIsNumberPressed] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  useEffect(() => {
    console.log(isAnyTextCopied);
  });

  const blursConditions: boolean[] = [
    isPhotoAlbumSelectionVisible,
    longPressedAlbum != null,
    isDeleteAlbumPressed,
    isDeleteAllAlbumsPressed,
    isDeleteSelectedAlbumsPressed,
    isNumberPressed,
  ];
  const blursOnPress: (() => void)[] = [
    () => {
      setIsPhotoAlbumSelectionVisible(false);
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
    () => {
      setIsNumberPressed(false);
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
              zIndex: index == 2 || index == 3 || index == 4 ? 3 : 1,
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

      <TopMenuWhenSelection
        isVisible={isAlbumSelectionVisible}
        quantityOfSelectedItems={selectedAlbums.length}
        onCancelPress={() => {
          setSelectedAlbums([]);
          setIsAlbumSelectionVisible(false);
        }}
        onDeleteAllPress={() => {
          setIsDeleteAllAlbumsPressed(true);
        }}
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
          setSelectedAlbums(selectedAlbums?.concat([longPressedAlbum]));
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

      <CallingMenu
        isVisible={isNumberPressed}
        onCopyPress={() => {
          setIsAnyTextCopied(true);
          setPhoneUsernameOrBioCopied("Number");
        }}
        onCancelPress={() => {
          setIsNumberPressed(false);
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

        <AvatarsNameAndGoBackButton
          onGoBackPress={() => {
            navigation.goBack();
          }}
          currentAvatar={currentAvatar}
          onRightPress={() => {
            setCurrentAvatar(
              user.avatars[
                (user.avatars.indexOf(currentAvatar) + 1) % user.avatars.length
              ]
            );
          }}
          onLeftPress={() => {
            setCurrentAvatar(
              user.avatars[
                user.avatars.indexOf(currentAvatar) - 1 > -1
                  ? user.avatars.indexOf(currentAvatar) - 1
                  : user.avatars.length - 1
              ]
            );
          }}
        />

        <CurrentAvatarBar currentAvatar={currentAvatar} />

        <NumberUsernameAndBio
          onUsernameAndBioPress={(text: string) => {
            setIsAnyTextCopied(true);
            setPhoneUsernameOrBioCopied(text);
          }}
          onNumberPress={() => setIsNumberPressed(true)}
        />

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
          isAlbumSelectionVisible={isAlbumSelectionVisible}
          onAlbumLongPress={(value: Album, event: GestureResponderEvent) => {
            setLongPressedAlbum(value);
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
          isAlbumCheckMarkVisible={(value: Album) => {
            return selectedAlbums.includes(value);
          }}
        />
      </ScrollView>

      <AnimatedMessageAboutCopying
        isVisible={isAnyTextCopied}
        onEnd={() => {
          setIsAnyTextCopied(false);
        }}
        text={phoneUsernameOrBioCopied + " is copied"}
      />
    </View>
  );
};

export default AvatarsAndInfoScreen;