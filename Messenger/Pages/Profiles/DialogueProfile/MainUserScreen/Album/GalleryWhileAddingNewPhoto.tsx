// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { tempUser } from "../../../SemiComponents/DBUser";
import { user, PhotoOrVideo } from "../../../SemiComponents/DBUser";
import { styles } from "../Styles";
import Photos from "../../../SemiComponents/MainScreen/Multimedia/Photos";
import Header from "../../../SemiComponents/Header";

interface GalleryWhileAddingNewPhotoProps {
  navigation: StackNavigationProp<{}>;
}

const GalleryWhileAddingNewPhoto: React.FC<GalleryWhileAddingNewPhotoProps> = (
  props
) => {
  const [selectedPhotosAndVideos, setSelectedPhotosAndVideos] = useState<
    Array<PhotoOrVideo>
  >(tempUser.selectedAlbum.photosAndVideos);

  useEffect(() => {
    tempUser.selectedAlbum.photosAndVideos = selectedPhotosAndVideos;
  });

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: "rgb(174, 174, 174)" }]}
    >
      <Header
        primaryTitle="Gallery"
        onGoBackPress={() => {
          props.navigation.goBack();
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
          onPress={(photo: PhotoOrVideo) => {
            if (!selectedPhotosAndVideos?.includes(photo)) {
              setSelectedPhotosAndVideos(selectedPhotosAndVideos?.concat([]));
            } else {
              setSelectedPhotosAndVideos(
                selectedPhotosAndVideos?.filter(
                  (photoOrVideo) => photoOrVideo !== photo
                )
              );
            }
          }}
          isPhotoSelectionVisible={true}
          data={user.photosAndVideos}
        />
      </ScrollView>
    </View>
  );
};

export default GalleryWhileAddingNewPhoto;
