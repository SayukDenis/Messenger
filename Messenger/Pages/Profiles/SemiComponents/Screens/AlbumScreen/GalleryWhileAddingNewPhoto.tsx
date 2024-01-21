// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import { PhotoOrVideo } from "../../DatabaseSimulation/DBClasses";
import { styles } from "./Styles";
import Photos from "../MainScreen/Multimedia/Photos";
import Header from "../../GeneralComponents/Header";
import { LinearGradient } from "expo-linear-gradient";

interface GalleryWhileAddingNewPhotoProps {
  navigation: StackNavigationProp<{}>;
}

const GalleryWhileAddingNewPhoto: React.FC<GalleryWhileAddingNewPhotoProps> = (
  props
) => {
  const [selectedPhotosAndVideos, setSelectedPhotosAndVideos] = useState<
    Array<PhotoOrVideo>
  >(GetProfile().selectedAlbum.photosAndVideos);

  useEffect(() => {
    GetProfile().selectedAlbum.photosAndVideos = selectedPhotosAndVideos;
  });

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={styles.linearGradient}
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
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <Photos
          selectedPhotosAndVideos={selectedPhotosAndVideos}
          onPress={(photo: PhotoOrVideo) => {
            console.log(selectedPhotosAndVideos.includes(photo));
            if (!selectedPhotosAndVideos.includes(photo)) {
              setSelectedPhotosAndVideos(
                selectedPhotosAndVideos.concat([photo])
              );
            } else {
              setSelectedPhotosAndVideos(
                selectedPhotosAndVideos.filter(
                  (photoOrVideo) => photoOrVideo !== photo
                )
              );
            }
          }}
          isPhotoSelectionVisible={true}
          data={GetProfile().photosAndVideos}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default GalleryWhileAddingNewPhoto;
