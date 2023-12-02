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
import { styles } from "../MainUserScreen/Styles";
import { user, Album, PhotoOrVideo } from "../../SemiComponents/DBUser";
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
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isDeleteAlbumPressed, setIsDeleteAlbumPressed] = useState(false);
  const [isAddNewPhotoPressed, setIsAddNewPhotoPressed] = useState(false);
  const [selectedPhotosAndVideos, setSelectedPhotosAndVideos] = useState<
    Array<PhotoOrVideo>
  >([]);
  const [pressedPhoto, setPressedPhoto] = useState(new PhotoOrVideo(""));
  const [isPhotoSelectionVisible, setIsPhotoSelectionVisible] = useState(false);
  const [isDeleteAllPhotosPressed, setIsDeleteAllPhotosPressed] =
    useState(false);
  const [isDeleteSelectedPhotosPressed, setIsDeleteSelectedPhotosPressed] =
    useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  var blursConditions: boolean[] = [
    pressedPhoto.url != "",
    isElseFeaturesVisible,
    isDeleteAlbumPressed,
    isAddNewPhotoPressed,
    isDeleteAllPhotosPressed,
    isDeleteSelectedPhotosPressed,
  ];
  var blursOnPress: (() => void)[] = [
    () => {
      setPressedPhoto(new PhotoOrVideo(""));
    },
    () => {
      setIsElseFeaturesVisible(false);
    },
    () => {
      setIsDeleteAlbumPressed(false);
    },
    () => {
      setIsAddNewPhotoPressed(false);
    },
    () => {
      setIsDeleteAllPhotosPressed(false);
    },
    () => {
      setIsDeleteSelectedPhotosPressed(false);
    },
  ];

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: "rgb(174, 174, 174)" }]}
    >
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
              zIndex: index == 2 ? 3 : 1,
            },
          ]}
        />
      ))}

      <View style={styles.topToolBar}>
        {isPhotoSelectionVisible ? (
          <>
            <TouchableOpacity
              style={[
                styles.doneButtonContainer,
                { left: 0.06 * Dimensions.get("screen").width },
              ]}
              onPress={() => {
                setIsDeleteAllPhotosPressed(true);
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
          setIsDeleteAlbumPressed(true);
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
          setIsDeleteSelectedPhotosPressed(true);
        }}
        onForwardPress={() => {
          alert("Forward photos...");
        }}
      />

      {/* Approval to delete an album */}
      <RemovalApproval
        isVisible={isDeleteAlbumPressed}
        onAnyPress={() => {
          setIsDeleteAlbumPressed(false);
        }}
        onAgreePress={() => {
          user.albums.splice(user.albums.indexOf(tempUser.selectedAlbum), 1);
          setIsDeleteAlbumPressed(false);
          setIsPhotoSelectionVisible(false);
          props.navigation.goBack();
        }}
        text={
          "Do you really want to delete album " +
          tempUser.selectedAlbum.name +
          "?"
        }
      />

      {/* Approval to delete selected photos in the album */}
      <RemovalApproval
        isVisible={isDeleteSelectedPhotosPressed}
        onAnyPress={() => {
          setIsDeleteSelectedPhotosPressed(false);
        }}
        onAgreePress={() => {
          selectedPhotosAndVideos.forEach((photo) => {
            tempUser.selectedAlbum.photosAndVideos.splice(
              tempUser.selectedAlbum.photosAndVideos.indexOf(photo),
              1
            );
          });
          setSelectedPhotosAndVideos(Array<PhotoOrVideo>());
          setIsPhotoSelectionVisible(false);
          setIsDeleteSelectedPhotosPressed(false);
        }}
        text={
          "Do you really want to delete selected photos in " +
          tempUser.selectedAlbum.name +
          "?"
        }
      />

      {/* Approval to delete all photos in the album */}
      <RemovalApproval
        isVisible={isDeleteAllPhotosPressed}
        onAnyPress={() => {
          setIsDeleteAllPhotosPressed(false);
        }}
        onAgreePress={() => {
          tempUser.selectedAlbum.photosAndVideos = [];
          setIsDeleteAllPhotosPressed(false);
          setIsPhotoSelectionVisible(false);
        }}
        text={
          "Do you really want to delete all photos in " +
          tempUser.selectedAlbum.name +
          "?"
        }
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
