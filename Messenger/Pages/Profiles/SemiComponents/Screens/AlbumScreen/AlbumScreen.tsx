// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import { user } from "../../DatabaseSimulation/DBUser";
import { PhotoOrVideo } from "../../DatabaseSimulation/DBClasses";
import Photos from "../MainScreen/Multimedia/Photos";
import Name from "../MainScreen/Name";
import GoBackButton from "../../GeneralComponents/GoBackButton";
import Blur from "../../GeneralComponents/Blur";
import ElseFeaturesIcon from "../MainScreen/Icons/ElseFeaturesIcon";
import AlbumElseFeaturesButtons from "./AlbumElseFeaturesButtons";
import RemovalApproval from "../../GeneralComponents/RemovalApproval";
import AddingPhotoMenu from "./AddingPhotoMenu";
import { useIsFocused } from "@react-navigation/native";
import PhotoElseFeaturesButtons from "./PhotoElseFeaturesButtons";
import BottomToolBar from "../MainScreen/ButtomToolBar";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import AlbumScreenHeader from "./AlbumScreenHeader";
import { LinearGradient } from "expo-linear-gradient";

interface AlbumScreenProps {
  navigation: StackNavigationProp<{}>;
}

const AlbumScreen: React.FC<AlbumScreenProps> = (props) => {
  const [removalApprovalText, setRemovalApprovalText] = useState("");
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isAddNewPhotoPressed, setIsAddNewPhotoPressed] = useState(false);
  const [selectedPhotosAndVideos, setSelectedPhotosAndVideos] = useState<
    Array<PhotoOrVideo>
  >([]);
  const [pressedPhoto, setPressedPhoto] = useState(new PhotoOrVideo(""));
  const [isPhotoSelectionVisible, setIsPhotoSelectionVisible] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  const removalApprovalsTexts: string[] = [
    "delete an album",
    "delete all photos",
    "delete selected photos",
  ];
  const removalApprovalsOnPress: (() => void)[] = [
    () => {
      user.albums.splice(user.albums.indexOf(GetProfile().selectedAlbum), 1);
      setIsPhotoSelectionVisible(false);
      props.navigation.goBack();
    },
    () => {
      GetProfile().selectedAlbum.photosAndVideos = [];
      setIsPhotoSelectionVisible(false);
    },
    () => {
      selectedPhotosAndVideos.forEach((photo) => {
        GetProfile().selectedAlbum.photosAndVideos.splice(
          GetProfile().selectedAlbum.photosAndVideos.indexOf(photo),
          1
        );
      });
      setSelectedPhotosAndVideos(Array<PhotoOrVideo>());
      setIsPhotoSelectionVisible(false);
    },
  ];

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={styles.linearGradient}
    >
      {/* General blur with zIndex 1 */}
      <Blur
        visibleWhen={
          pressedPhoto.url != "" ||
          isElseFeaturesVisible ||
          isAddNewPhotoPressed
        }
        onPress={() => {
          setPressedPhoto(new PhotoOrVideo(""));
          setIsElseFeaturesVisible(false);
          setIsAddNewPhotoPressed(false);
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

      <View style={styles.topToolBar}>
        {isPhotoSelectionVisible ? (
          <>
            <TouchableOpacity
              style={[
                styles.doneButtonContainer,
                { left: 0.06 * Dimensions.get("screen").width },
              ]}
              onPress={() => {
                setRemovalApprovalText("delete all photos");
              }}
            >
              <Text style={[styles.doneButtonTitle, { color: "red" }]}>
                Delete all
              </Text>
            </TouchableOpacity>

            {/* Number of selected albums */}
            <View
              style={[
                styles.doneButtonContainer,
                { left: 0.4 * Dimensions.get("screen").width },
              ]}
            >
              <Text style={styles.doneButtonTitle}>
                Select({selectedPhotosAndVideos.length})
              </Text>
            </View>

            {/* Cancel button */}
            <TouchableOpacity
              style={[
                styles.doneButtonContainer,
                { right: -0.075 * Dimensions.get("screen").width },
              ]}
              onPress={() => {
                setSelectedPhotosAndVideos([]);
                setIsPhotoSelectionVisible(false);
              }}
            >
              <Text style={styles.doneButtonTitle}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <AlbumScreenHeader
            navigation={props.navigation}
            onElseFeaturesPress={() => {
              setIsElseFeaturesVisible(true);
            }}
          />
        )}
      </View>

      <AlbumElseFeaturesButtons
        isVisible={isElseFeaturesVisible}
        onForwardPress={() => {
          props.navigation.navigate("ForwardToChatsScreen" as never);
        }}
        onAddPhotoPress={() => {
          setIsAddNewPhotoPressed(true);
          setIsElseFeaturesVisible(false);
        }}
        onDeleteAlbumPress={() => {
          setRemovalApprovalText("delete an album");
        }}
        onSortPress={() => {
          alert("Sorting...");
        }}
      />

      {pressedPhoto.url != "" && (
        <Image style={styles.zoomedPhoto} source={{ uri: pressedPhoto.url }} />
      )}

      <PhotoElseFeaturesButtons
        isVisible={pressedPhoto.url != ""}
        setIsNotVisible={() => {
          setPressedPhoto(new PhotoOrVideo(""));
        }}
        onCopyPress={() => {
          alert("copy");
        }}
        onDeletePress={() => {
          GetProfile().selectedAlbum.photosAndVideos.splice(
            GetProfile().selectedAlbum.photosAndVideos.indexOf(pressedPhoto),
            1
          );
        }}
        onForwardPress={() => {
          alert("forward");
        }}
        onMakeMainPhotoPress={() => {
          GetProfile().selectedAlbum.mainPhoto = pressedPhoto;
        }}
        onSelectPress={() => {
          setIsPhotoSelectionVisible(true);
          setSelectedPhotosAndVideos(
            selectedPhotosAndVideos?.concat([pressedPhoto])
          );
        }}
      />

      <ScrollView
        style={{
          flex: 1,
        }}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <Photos
          selectedPhotosAndVideos={selectedPhotosAndVideos}
          isPhotoSelectionVisible={isPhotoSelectionVisible}
          data={GetProfile().selectedAlbum.photosAndVideos}
          onPress={(photo: PhotoOrVideo) => {
            if (isPhotoSelectionVisible) {
              if (!selectedPhotosAndVideos?.includes(photo)) {
                setSelectedPhotosAndVideos(
                  selectedPhotosAndVideos?.concat([photo])
                );
              } else {
                setSelectedPhotosAndVideos(
                  selectedPhotosAndVideos?.filter(
                    (photoOrVideo) => photoOrVideo !== photo
                  )
                );
              }
            } else {
              setPressedPhoto(photo);
            }
          }}
          hasAddNewPhotoFeature={true}
          onAddNewPhotoPress={() => {
            setIsAddNewPhotoPressed(true);
            setIsElseFeaturesVisible(false);
          }}
        />
      </ScrollView>

      <BottomToolBar
        isVisible={isPhotoSelectionVisible}
        onDeletePress={() => {
          setRemovalApprovalText("delete selected photos");
        }}
        onForwardPress={() => {
          alert("Forward photos...");
        }}
      />

      <AddingPhotoMenu
        isVisible={isAddNewPhotoPressed}
        setIsVisible={(value: boolean) => {
          setIsAddNewPhotoPressed(value);
        }}
        onPhotoPress={(value: PhotoOrVideo) => {
          GetProfile().selectedAlbum.photosAndVideos.push(value);
          setIsAddNewPhotoPressed(false);
        }}
        onGalleryButtonPress={() => {
          props.navigation.navigate("GalleryWhileAddingNewPhoto" as never);
        }}
      />
    </LinearGradient>
  );
};

export default AlbumScreen;
