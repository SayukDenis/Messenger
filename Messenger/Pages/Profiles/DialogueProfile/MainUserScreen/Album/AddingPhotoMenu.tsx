// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { styles } from "../Styles";
import { FlatList } from "react-native-gesture-handler";
import { PhotoOrVideo, user } from "../../../SemiComponents/DBUser";
import { tempUser } from "../MainUserScreen";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

interface AddingPhotoMenuProps {
  setIsVisible: (value: boolean) => void;
  isVisible: boolean;
  onPhotoPress: (value: PhotoOrVideo) => void;
  onGalleryButtonPress: () => void;
}

const AddingPhotoMenu: React.FC<AddingPhotoMenuProps> = (props) => {
  const [photosAndVideos, setPhotosAndVideos] = useState<Array<PhotoOrVideo>>(
    tempUser.selectedAlbum.photosAndVideos
  );

  var data: Array<PhotoOrVideo> = [];

  var counter = 0;
  user.photosAndVideos.map((photo) => {
    if (
      !tempUser.selectedAlbum.photosAndVideos.includes(photo) &&
      counter <= 9
    ) {
      data?.push(photo);
      counter++;
    }
  });

  useEffect(() => {});

  return (
    <>
      {props.isVisible && (
        <View style={styles.addingPhotoMenuMainContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => data.indexOf(item).toString()}
            horizontal={false}
            numColumns={5}
            contentContainerStyle={{
              gap: 0.01 * screenWidth,
              paddingTop: 0.01 * screenWidth,
              left: (0.05 / 6) * screenWidth,
            }}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.onPhotoPress(item);
                  }}
                  style={[
                    styles.photo,
                    {
                      left: (0.05 / 6) * screenWidth * (data.indexOf(item) % 5),
                    },
                  ]}
                >
                  <Image style={styles.photo} source={{ uri: item.url }} />
                </TouchableOpacity>
              );
            }}
          />

          {/* Gallery button*/}
          <TouchableOpacity
            onPress={() => {
              props.onGalleryButtonPress();
            }}
            style={styles.galleryButton}
          >
            <Text style={styles.galleryTitle}>Gallery</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AddingPhotoMenu;
