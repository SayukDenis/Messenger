// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import TopToolBar from "../../SemiComponents/MainScreen/TopToolBar";
import AvatarWithCallingButtons from "../../SemiComponents/MainScreen/AvatarWithCallingButtons";
import Multimedia from "../../SemiComponents/MainScreen/Multimedia/Multimedia";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import ElseFeaturesButtons from "../../SemiComponents/MainScreen/ElseFeaturesButtons";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import {
  Album,
  PhotoOrVideo,
  tempUser,
  user,
} from "../../SemiComponents/DBUser";
import AlbumLongPressedMenu from "../../SemiComponents/MainScreen/Multimedia/AlbumLongPressedMenu";
import BottomToolBar from "../../SemiComponents/MainScreen/ButtomToolBar";
import { GestureResponderEvent } from "react-native-modal";
import TypeChannelMenu from "./TypeChannelMenu";
import { LinearGradient } from "expo-linear-gradient";

const screenHeight = Dimensions.get("screen").height;

interface MainChannelScreenProps {
  navigation: StackNavigationProp<{}>;
}

const MainChannelScreen: React.FC<MainChannelScreenProps> = (props) => {
  const [removalApprovalText, setRemovalApprovalText] = useState("");
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);
  const [isMuted, setIsMuted] = useState(user.isMuted);
  const [longPressedAlbum, setLongPressedAlbum] = useState(null);
  const [positionYOfLongPressedAlbum, setPositionYOfLongPressedAlbum] =
    useState(0);
  const [isAlbumSelectionVisible, setIsAlbumSelectionVisible] = useState(false);
  const [selectedAlbums, setSelectedAlbums] = useState<Array<Album>>([]);
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
      user.albums.splice(user.albums.indexOf(longPressedAlbum), 1);
      setLongPressedAlbum(null);
    },
    () => {
      user.albums = Array<Album>();
      setIsAlbumSelectionVisible(false);
    },
    () => {
      selectedAlbums.forEach((album) => {
        user.albums.splice(user.albums.indexOf(album), 1);
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
      <View style={styles.mainContainer}>
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
          primaryTitle={user.profileName}
          secondaryTitle="2 members"
          onElseFeaturesPress={() => {
            setIsElseFeaturesVisible(true);
          }}
          isMuted={isMuted}
          isSearchButtonVisible={true}
          onGoBackPress={() => {
            props.navigation.goBack();
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
          onClearChatPress={() => {
            setRemovalApprovalText("clear the chat");
          }}
          onTypeChannelPress={() => {
            setIsTypeChannelPressed(true);
            setIsElseFeaturesVisible(false);
          }}
          onSettingsPress={() =>
            props.navigation.navigate("ChannelSettingsScreen" as never)
          }
          mode="channel"
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
          <AvatarWithCallingButtons
            avatarURL="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
            onAvatarPress={() => {
              props.navigation.navigate("AvatarsAndInfoScreen" as never);
            }}
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
            onPhotoPress={(photo: PhotoOrVideo) => {
              tempUser.selectedPhoto = photo;
              props.navigation.navigate("PhotoScreen" as never);
            }}
            onAlbumPress={(item: Album) => {
              if (isAlbumSelectionVisible) {
                if (!selectedAlbums.includes(item)) {
                  setSelectedAlbums(selectedAlbums.concat([item]));
                } else {
                  setSelectedAlbums(
                    selectedAlbums.filter(
                      (photoOrVideo) => photoOrVideo !== item
                    )
                  );
                }
              } else {
                tempUser.selectedAlbum = item;
                props.navigation.navigate("Album" as never);
              }
            }}
            onNewAlbumPress={() => {
              props.navigation.navigate("NewAlbumScreen" as never);
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

        <BottomToolBar
          isVisible={isAlbumSelectionVisible}
          onDeletePress={() => {
            setRemovalApprovalText("delete selected albums");
          }}
          onForwardPress={() => {
            alert("Forward album...");
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default MainChannelScreen;
