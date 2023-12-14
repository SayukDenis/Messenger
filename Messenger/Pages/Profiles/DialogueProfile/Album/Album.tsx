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
import { user, PhotoOrVideo } from "../../SemiComponents/DBUser";
import Photos from "../../SemiComponents/MainScreen/Multimedia/Photos";
import { tempUser } from "../../SemiComponents/DBUser";
import Name from "../../SemiComponents/MainScreen/Name";
import GoBackButton from "../../SemiComponents/GoBackButton";
import Blur from "../../SemiComponents/MainScreen/Blur";
import ElseFeaturesIcon from "../../SemiComponents/MainScreen/Icons/ElseFeaturesIcon";
import AlbumElseFeaturesButtons from "./AlbumElseFeaturesButtons";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import AddingPhotoMenu from "./AddingPhotoMenu";
import { useIsFocused } from "@react-navigation/native";
import PhotoElseFeaturesButtons from "./PhotoElseFeaturesButtons";
import BottomToolBar from "../../SemiComponents/MainScreen/ButtomToolBar";

interface AlbumFillingProps {
  navigation: StackNavigationProp<{}>;
}

const AlbumFilling: React.FC<AlbumFillingProps> = (props) => {
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
  //2, 4, 5

  const removalApprovalsTexts: string[] = [
    "delete an album",
    "delete all photos",
    "delete selected photos",
  ];
  const removalApprovalsOnPress: (() => void)[] = [
    () => {
      user.albums.splice(user.albums.indexOf(tempUser.selectedAlbum), 1);
      setIsPhotoSelectionVisible(false);
      props.navigation.goBack();
    },
    () => {
      tempUser.selectedAlbum.photosAndVideos = [];
      setIsPhotoSelectionVisible(false);
    },
    () => {
      selectedPhotosAndVideos.forEach((photo) => {
        tempUser.selectedAlbum.photosAndVideos.splice(
          tempUser.selectedAlbum.photosAndVideos.indexOf(photo),
          1
        );
      });
      setSelectedPhotosAndVideos(Array<PhotoOrVideo>());
      setIsPhotoSelectionVisible(false);
    },
  ];

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: "rgb(174, 174, 174)" }]}
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
          <>
            {/* Main name */}
            <Name
              primaryTitle={tempUser.selectedAlbum.name}
              style={styles.headerTitle}
            />

            {/* Going back button */}
            <GoBackButton onPress={() => props.navigation.goBack()} />

            <TouchableOpacity
              onPress={() => {
                setIsElseFeaturesVisible(true);
              }}
              style={styles.elseFeaturesButton}
            >
              <ElseFeaturesIcon />
            </TouchableOpacity>
          </>
        )}
      </View>

      <AlbumElseFeaturesButtons
        isVisible={isElseFeaturesVisible}
        onForwardPress={() => {
          alert("Forward album...");
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
          tempUser.selectedAlbum.photosAndVideos.splice(
            tempUser.selectedAlbum.photosAndVideos.indexOf(pressedPhoto),
            1
          );
        }}
        onForwardPress={() => {
          alert("forward");
        }}
        onMakeMainPhotoPress={() => {
          tempUser.selectedAlbum.mainPhoto = pressedPhoto;
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
        contentContainerStyle={{
          top: -0.085 * Dimensions.get("screen").height,
        }}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <Photos
          selectedPhotosAndVideos={selectedPhotosAndVideos}
          isPhotoSelectionVisible={isPhotoSelectionVisible}
          data={tempUser.selectedAlbum.photosAndVideos}
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
          tempUser.selectedAlbum.photosAndVideos.push(value);
          setIsAddNewPhotoPressed(false);
        }}
        onGalleryButtonPress={() => {
          props.navigation.navigate("GalleryWhileAddingNewPhoto" as never);
        }}
      />
    </View>
  );
};

export default AlbumFilling;
