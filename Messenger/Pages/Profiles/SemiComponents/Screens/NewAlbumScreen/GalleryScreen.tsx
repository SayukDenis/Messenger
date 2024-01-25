// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../GeneralComponents/Header";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import Photos from "../MainScreen/Multimedia/Photos";
import { PhotoOrVideo } from "../../DatabaseSimulation/DBClasses";
import { LinearGradient } from "expo-linear-gradient";

interface GalleryScreenProps {
  navigation: StackNavigationProp<{}>;
}

const GalleryScreen: React.FC<GalleryScreenProps> = (props) => {
  const [selectedPhotosAndVideos, setSelectedPhotosAndVideos] = useState<
    Array<PhotoOrVideo>
  >(GetProfile().selectedPhotosAndVideos);

  useEffect(() => {
    GetProfile().selectedPhotosAndVideos = selectedPhotosAndVideos;
  });

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
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
          isCheckMarkVisible={(item: PhotoOrVideo) =>
            selectedPhotosAndVideos.includes(item)
          }
          isPhotoSelectionVisible={true}
          data={GetProfile().photosAndVideos}
          onPress={(photo: PhotoOrVideo) => {
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
          }}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default GalleryScreen;
