// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { GetProfile } from "../../SemiComponents/DatabaseSimulation/DBFunctions";
import Photos from "../../SemiComponents/Screens/MainScreen/Multimedia/Photos";
import { PhotoOrVideo } from "../../SemiComponents/DatabaseSimulation/DBClasses";

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
    </View>
  );
};

export default GalleryScreen;
