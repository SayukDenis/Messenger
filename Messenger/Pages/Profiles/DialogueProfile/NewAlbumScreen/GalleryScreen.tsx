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
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import { user, Album, PhotoOrVideo } from "../../SemiComponents/DBUser";
import Photos from "../../SemiComponents/MainScreen/Multimedia/Photos";
import { tempUser } from "./NewAlbumScreen";

interface GalleryScreenProps {
  navigation: StackNavigationProp<{}>;
}

const GalleryScreen: React.FC<GalleryScreenProps> = (props) => {
  const [selectedPhotosAndVideos, setSelectedPhotosAndVideos] = useState<
    Array<PhotoOrVideo>
  >(tempUser.selectedPhotosAndVideos);

  useEffect(() => {
    tempUser.selectedPhotosAndVideos = selectedPhotosAndVideos;
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
          setSelectedPhotosAndVideos={(value: Array<PhotoOrVideo>) => {
            setSelectedPhotosAndVideos(value);
          }}
          isPhotoSelectionAlwaysVisible={true}
        />
      </ScrollView>
    </View>
  );
};

export default GalleryScreen;
