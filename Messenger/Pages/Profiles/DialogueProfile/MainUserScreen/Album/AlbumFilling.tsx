// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../Styles";
import Header from "../../../SemiComponents/Header";
import { user, Album, PhotoOrVideo } from "../../../SemiComponents/DBUser";
import Photos from "../../../SemiComponents/MainScreen/Multimedia/Photos";
import { tempUser } from "../MainUserScreen";
import Name from "../../../SemiComponents/MainScreen/Name";
import GoBackButton from "../../../SemiComponents/GoBackButton";
import Blur from "../../../SemiComponents/MainScreen/Blur";
import ElseFeaturesIcon from "../../../SemiComponents/MainScreen/Icons/ElseFeaturesIcon";
import AlbumElseFeaturesButtons from "./AlbumElseFeaturesButtons";
import RemovalApproval from "../../../SemiComponents/MainScreen/RemovalApproval";
import AddingPhotoMenu from "./AddingPhotoMenu";
import { useIsFocused } from "@react-navigation/native";

interface AlbumFillingProps {
  navigation: StackNavigationProp<{}>;
}

const AlbumFilling: React.FC<AlbumFillingProps> = (props) => {
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isDeleteAlbumPressed, setIsDeleteAlbumPressed] = useState(false);
  const [isAddNewPhotoPressed, setIsAddNewPhotoPressed] = useState(false);
  const [selectedPhotosAndVideos, setSelectedPhotosAndVideos] =
    useState<Array<PhotoOrVideo>>();
  const [pressedPhoto, setPressedPhoto] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  var blursConditions: boolean[] = [
    pressedPhoto != null,
    isElseFeaturesVisible,
    isDeleteAlbumPressed,
    isAddNewPhotoPressed,
  ];
  var blursOnPress: (() => void)[] = [
    () => {
      setPressedPhoto(null);
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
      </View>

      <AlbumElseFeaturesButtons
        isVisible={isElseFeaturesVisible}
        setIsVisible={(value: boolean) => setIsElseFeaturesVisible(value)}
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

      {pressedPhoto != null && (
        <Image style={styles.zoomedPhoto} source={{ uri: pressedPhoto.url }} />
      )}

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
          setSelectedPhotosAndVideos={(value: Array<PhotoOrVideo>) => {
            setSelectedPhotosAndVideos(value);
          }}
          isPhotoSelectionAlwaysVisible={false}
          data={tempUser.selectedAlbum.photosAndVideos}
          onPress={(value: PhotoOrVideo) => {
            setPressedPhoto(value);
          }}
          hasAddNewPhotoFeature={true}
          onAddNewPhotoPress={() => {
            setIsAddNewPhotoPressed(true);
            setIsElseFeaturesVisible(false);
          }}
        />
      </ScrollView>

      {/* Approval to delete an album */}
      <RemovalApproval
        isVisible={isDeleteAlbumPressed}
        onAnyPress={() => {
          setIsDeleteAlbumPressed(false);
        }}
        onAgreePress={() => {
          user.albums.splice(user.albums.indexOf(tempUser.selectedAlbum), 1);
          setIsDeleteAlbumPressed(false);
          setIsElseFeaturesVisible(false);
          props.navigation.goBack();
        }}
        text={
          "Do you really want to delete album " + tempUser.selectedAlbum.name
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
