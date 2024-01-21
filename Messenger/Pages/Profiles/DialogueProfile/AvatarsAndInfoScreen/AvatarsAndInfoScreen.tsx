// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import Multimedia from "../../SemiComponents/Screens/MainScreen/Multimedia/Multimedia";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import RemovalApproval from "../../SemiComponents/GeneralComponents/RemovalApproval";
import { GetProfile } from "../../SemiComponents/DatabaseSimulation/DBFunctions";
import {
  Album,
  PhotoOrVideo,
} from "../../SemiComponents/DatabaseSimulation/DBClasses";
import AlbumLongPressedMenu from "../../SemiComponents/Screens/MainScreen/Multimedia/AlbumLongPressedMenu";
import BottomToolBar from "../../SemiComponents/Screens/MainScreen/ButtomToolBar";
import AvatarsNameAndGoBackButton from "./AvatarsNameAndGoBackButton";
import TopMenuWhenSelection from "../../SemiComponents/GeneralComponents/TopMenuWhenSelection";
import NumberUsernameAndBio from "./NumberUsernameAndBio";
import CurrentAvatarBar from "./CurrentAvatarBar";
import MessageAboutCopying from "./MessageAboutCopying";
import CallingMenu from "./CallingMenu";
import { GestureResponderEvent } from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";

const screenHeight = Dimensions.get("screen").height;

type AvatarsAndInfoScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const AvatarsAndInfoScreen: React.FC<AvatarsAndInfoScreenProps> = ({
  navigation,
}) => {
  const [removalApprovalText, setRemovalApprovalText] = useState("");
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [longPressedAlbum, setLongPressedAlbum] = useState(null);
  const [positionYOfLongPressedAlbum, setPositionYOfLongPressedAlbum] =
    useState(0);
  const [isAlbumSelectionVisible, setIsAlbumSelectionVisible] = useState(false);
  const [selectedAlbums, setSelectedAlbums] = useState<Array<Album>>([]);
  const [currentAvatar, setCurrentAvatar] = useState(GetProfile().avatars[0]);
  const [isAnyTextCopied, setIsAnyTextCopied] = useState(false);
  const [phoneUsernameOrBioCopied, setPhoneUsernameOrBioCopied] = useState("");
  const [isNumberPressed, setIsNumberPressed] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  useEffect(() => {
    console.log(isAnyTextCopied);
  });

  const removalApprovalsTexts: string[] = [
    "delete an album",
    "delete all albums",
    "delete selected albums",
  ];
  const removalApprovalsOnPress: (() => void)[] = [
    () => {
      GetProfile().albums.splice(
        GetProfile().albums.indexOf(longPressedAlbum),
        1
      );
      setLongPressedAlbum(null);
    },
    () => {
      GetProfile().albums = Array<Album>();
      setIsAlbumSelectionVisible(false);
    },
    () => {
      selectedAlbums.forEach((album) => {
        GetProfile().albums.splice(GetProfile().albums.indexOf(album), 1);
      });
      setSelectedAlbums(Array<Album>());
      setIsAlbumSelectionVisible(false);
    },
  ];

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      {/* General blur with zIndex 1 */}
      <Blur
        visibleWhen={
          isPhotoAlbumSelectionVisible ||
          longPressedAlbum != null ||
          isNumberPressed
        }
        onPress={() => {
          setIsPhotoAlbumSelectionVisible(false);
          setLongPressedAlbum(null);
          setIsNumberPressed(false);
        }}
        style={styles.blurEffect}
      />

      {/* Blur over blur with zIndex 3 */}
      <Blur
        visibleWhen={removalApprovalText != ""}
        onPress={() => {
          setRemovalApprovalText("");
        }}
        style={[
          styles.blurEffect,
          {
            zIndex: 3,
          },
        ]}
      />

      {removalApprovalsTexts.map((item, index) => {
        return (
          <RemovalApproval
            key={item}
            isVisible={removalApprovalText == item}
            onAnyPress={() => {
              setRemovalApprovalText("");
            }}
            onAgreePress={() => {
              removalApprovalsOnPress[index]();
            }}
            text={"Do you really want to " + item + "?"}
          />
        );
      })}

      <TopMenuWhenSelection
        isVisible={isAlbumSelectionVisible}
        quantityOfSelectedItems={selectedAlbums.length}
        onCancelPress={() => {
          setSelectedAlbums([]);
          setIsAlbumSelectionVisible(false);
        }}
        onDeleteAllPress={() => {
          setRemovalApprovalText("delete all albums");
        }}
      />

      <AlbumLongPressedMenu
        isVisible={longPressedAlbum != null}
        longPressedAlbum={longPressedAlbum}
        positionYOfLongPressedAlbum={positionYOfLongPressedAlbum}
        onDeleteAlbumPress={() => {
          setRemovalApprovalText("delete an album");
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
          setRemovalApprovalText("delete selected albums");
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
              GetProfile().avatars[
                (GetProfile().avatars.indexOf(currentAvatar) + 1) %
                  GetProfile().avatars.length
              ]
            );
          }}
          onLeftPress={() => {
            setCurrentAvatar(
              GetProfile().avatars[
                GetProfile().avatars.indexOf(currentAvatar) - 1 > -1
                  ? GetProfile().avatars.indexOf(currentAvatar) - 1
                  : GetProfile().avatars.length - 1
              ]
            );
          }}
        />

        <CurrentAvatarBar currentAvatar={currentAvatar} />

        <NumberUsernameAndBio
          onUsernamePress={(text: string) => {
            setIsAnyTextCopied(true);
            setPhoneUsernameOrBioCopied(text);
          }}
          onNumberPress={() => setIsNumberPressed(true)}
        />

        <View style={{ height: 0.02 * screenHeight }} />

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
            GetProfile().selectedPhoto = photo;
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
              GetProfile().selectedAlbum = item;
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

      <MessageAboutCopying
        isVisible={isAnyTextCopied}
        onEnd={() => {
          setIsAnyTextCopied(false);
        }}
        text={phoneUsernameOrBioCopied + " is copied"}
      />
    </LinearGradient>
  );
};

export default AvatarsAndInfoScreen;
