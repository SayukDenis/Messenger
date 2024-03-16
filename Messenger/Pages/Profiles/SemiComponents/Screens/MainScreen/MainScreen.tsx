// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import TopToolBar from "./TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import Multimedia from "./Multimedia/Multimedia";
import Blur from "../../GeneralComponents/Blur";
import ElseFeaturesButtons from "./ElseFeaturesButtons";
import RemovalApproval from "../../GeneralComponents/RemovalApproval";
import {
  Album,
  PhotoOrVideo,
  Voice,
  File,
  Link,
} from "../../DatabaseSimulation/DBClasses";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import AlbumLongPressedMenu from "./Multimedia/AlbumLongPressedMenu";
import BottomToolBar from "./ButtomToolBar";
import { GestureResponderEvent } from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import {
  forwardMode,
  pickedProfile,
} from "../../DatabaseSimulation/DBVariables";
import { user } from "../../DatabaseSimulation/DBUser";
import { group } from "../../DatabaseSimulation/DBGroup";
import { channel } from "../../DatabaseSimulation/DBChannel";
import TypeChannelMenu from "./TypeChannelMenu";

const screenHeight = Dimensions.get("screen").height;

type MainScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [removalApprovalText, setRemovalApprovalText] = useState("");
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [isMuted, setIsMuted] = useState(GetProfile().isMuted);
  const [isBlocked, setIsBlocked] = useState(
    pickedProfile.current == "user" ? GetProfile().isBlocked : false
  );
  const [longPressedAlbum, setLongPressedAlbum] = useState(null);
  const [positionYOfLongPressedAlbum, setPositionYOfLongPressedAlbum] =
    useState(0);
  const [isMultimediaSelectionVisible, setIsMultimediaSelectionVisible] =
    useState(false);
  const [selectedMultimedia, setSelectedMultimedia] = useState<
    Array<Album | PhotoOrVideo | File | Voice | Link>
  >([]);
  const [isTypeChannelPressed, setIsTypeChannelPressed] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  const removalApprovalsTexts: string[] = [
    "clear the chat",
    "delete an album",
    "delete all albums",
    "delete selected albums",
  ];

  const removalApprovalsOnPress: (() => void)[] = [
    () => {
      alert("Agree");
    },
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
      setSelectedMultimedia([]);
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
          isElseFeaturesVisible ||
          longPressedAlbum != null ||
          isPhotoAlbumSelectionVisible ||
          isTypeChannelPressed
        }
        onPress={() => {
          setIsElseFeaturesVisible(false);
          setLongPressedAlbum(null);
          setIsPhotoAlbumSelectionVisible(false);
          setIsTypeChannelPressed(false);
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

      {/* Top tool bar with buttons*/}
      <TopToolBar
        primaryTitle={GetProfile().profileName}
        secondaryTitle={
          pickedProfile.current == "user"
            ? user.lastTimeOnline
            : pickedProfile.current == "group"
            ? group.members.length.toString() + " members"
            : channel.subscribers.length.toString() + " subscribers"
        }
        onElseFeaturesPress={() => {
          setIsElseFeaturesVisible(true);
        }}
        isMuted={isMuted}
        isBlocked={isBlocked}
        isSearchButtonVisible={true}
        onGoBackPress={() => {
          navigation.goBack();
        }}
        isMultimediaSelectionVisible={isMultimediaSelectionVisible}
        quantityOfSelectedItems={selectedMultimedia.length}
        onCancelPress={() => {
          setSelectedMultimedia([]);
          setIsMultimediaSelectionVisible(false);
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
        onSettingsPress={() => navigation.navigate("SettingsScreen" as never)}
        onForwardPress={() => {
          navigation.navigate("ForwardToChatsScreen" as never);
        }}
        onTypeChannelPress={() => {
          setIsElseFeaturesVisible(false);
          setIsTypeChannelPressed(true);
        }}
        mode={pickedProfile.current}
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
          setSelectedMultimedia(selectedMultimedia.concat([longPressedAlbum]));
          setLongPressedAlbum(null);
        }}
      />

      <TypeChannelMenu
        isVisible={isTypeChannelPressed}
        onPrivatePress={() => {
          alert("private");
        }}
        onPublicPress={() => {
          alert("public");
        }}
      />

      <BottomToolBar
        isVisible={isMultimediaSelectionVisible}
        onDeletePress={() => {
          setRemovalApprovalText("delete selected albums");
        }}
        onForwardPress={() => {
          forwardMode.current = "albums";
          navigation.navigate("ForwardToChatsScreen" as never);
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
        <AvatarWithCallingButtons
          avatarURL={GetProfile().avatars[0].url}
          onAvatarPress={() => {
            navigation.navigate("AvatarsAndInfoScreen" as never);
          }}
        />

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
    </LinearGradient>
  );
};

export default MainScreen;
