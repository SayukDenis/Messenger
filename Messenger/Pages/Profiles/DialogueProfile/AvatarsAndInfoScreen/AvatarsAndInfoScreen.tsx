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
  File,
  Voice,
  Link,
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
  const [isMultimediaSelectionVisible, setIsMultimediaSelectionVisible] =
    useState(false);
  const [selectedMultimedia, setSelectedMultimedia] = useState<
    Array<Album | PhotoOrVideo | File | Voice | Link>
  >([]);
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
      setIsMultimediaSelectionVisible(false);
    },
    () => {
      selectedMultimedia.forEach((album) => {
        if (album instanceof Album) {
          GetProfile().albums.splice(GetProfile().albums.indexOf(album), 1);
        }
      });
      setSelectedMultimedia(Array<Album>());
      setIsMultimediaSelectionVisible(false);
    },
  ];

  const HandleMultimediaLongPress = (
    value: PhotoOrVideo | Album | File | Voice | Link
  ) => {
    setIsMultimediaSelectionVisible(true);
    if (!selectedMultimedia.includes(value)) {
      setSelectedMultimedia(selectedMultimedia.concat([value]));
    } else {
      setSelectedMultimedia(
        selectedMultimedia.filter((photoOrVideo) => photoOrVideo !== value)
      );
    }
  };

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
        isVisible={isMultimediaSelectionVisible}
        quantityOfSelectedItems={selectedMultimedia.length}
        onCancelPress={() => {
          setSelectedMultimedia([]);
          setIsMultimediaSelectionVisible(false);
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
          setIsMultimediaSelectionVisible(true);
          setSelectedMultimedia(selectedMultimedia?.concat([longPressedAlbum]));
          setLongPressedAlbum(null);
        }}
      />

      <BottomToolBar
        isVisible={isMultimediaSelectionVisible}
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

        {/* Multimedia with photo/albums, files, voice, links*/}
        <Multimedia
          isPhotoAlbumSelectionVisible={isPhotoAlbumSelectionVisible}
          setIsPhotoAlbumSelectionVisible={(value: boolean) =>
            setIsPhotoAlbumSelectionVisible(value)
          }
          pressedMultimediaButton={pressedMultimediaButton}
          setPressedMultimediaButton={(value: string) => {
            setPressedMultimediaButton(value);
          }}
          onAnyPressWhileSelection={(
            value: Album | PhotoOrVideo | File | Voice | Link
          ) => {
            if (isMultimediaSelectionVisible) {
              if (!selectedMultimedia.includes(value)) {
                setSelectedMultimedia(selectedMultimedia.concat([value]));
              } else {
                setSelectedMultimedia(
                  selectedMultimedia.filter((item) => item !== value)
                );
              }
            }
          }}
          onPhotoPress={(value: PhotoOrVideo) => {
            GetProfile().selectedPhoto = value;
            navigation.navigate("PhotoScreen" as never);
          }}
          onAlbumPress={(value: Album) => {
            GetProfile().selectedAlbum = value;
            navigation.navigate("Album" as never);
          }}
          onNewAlbumPress={() => {
            navigation.navigate("NewAlbumScreen" as never);
          }}
          onAnyLongPressExceptAlbum={(
            value: PhotoOrVideo | File | Voice | Link
          ) => {
            HandleMultimediaLongPress(value);
          }}
          onAlbumLongPress={(value: Album, event: GestureResponderEvent) => {
            if (!isMultimediaSelectionVisible) {
              setLongPressedAlbum(value);
              setPositionYOfLongPressedAlbum(
                event.nativeEvent.pageY + 0.05 * screenHeight
              );
            } else {
              HandleMultimediaLongPress(value);
            }
          }}
          isMultimediaSelectionVisible={isMultimediaSelectionVisible}
          isCheckMarkVisible={(
            value: Album | PhotoOrVideo | File | Voice | Link
          ) => selectedMultimedia.includes(value)}
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
