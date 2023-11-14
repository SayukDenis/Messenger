// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { user, PhotoOrVideo } from "../../DBUser";
import styles from "../Styles";
import CheckmarkIcon from "../Icons/CheckmarkIcon";

interface PhotosProps {
  selectedPhotosAndVideos?: Array<PhotoOrVideo>;
  setSelectedPhotosAndVideos?: (value: Array<PhotoOrVideo>) => void;
  isPhotoSelectionAlwaysVisible: boolean;
}

const Photos: React.FC<PhotosProps> = (props) => {
  return (
    <View style={styles.mediaContainer}>
      <FlatList
        data={user.photosAndVideos}
        keyExtractor={(item) => user.photosAndVideos.indexOf(item).toString()}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={{
          gap: 0.005 * Dimensions.get("screen").width,
          paddingBottom: 0.5 * Dimensions.get("screen").height,
          backgroundColor: "rgb(174, 174, 174)",
        }}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (props.selectedPhotosAndVideos) {
                  if (!props.selectedPhotosAndVideos?.includes(item)) {
                    props.setSelectedPhotosAndVideos(
                      props.selectedPhotosAndVideos?.concat([item])
                    );
                  } else {
                    props.setSelectedPhotosAndVideos(
                      props.selectedPhotosAndVideos?.filter(
                        (photoOrVideo) => photoOrVideo !== item
                      )
                    );
                  }
                }
              }}
              style={[
                styles.photo,
                {
                  left:
                    0.005 *
                    Dimensions.get("screen").width *
                    (user.photosAndVideos.indexOf(item) % 3),
                },
              ]}
            >
              <Image style={styles.photo} source={{ uri: item.url }} />
              {props.isPhotoSelectionAlwaysVisible && (
                <View style={styles.checkmarkContainerForPhoto}>
                  {props.selectedPhotosAndVideos.includes(item) && (
                    <CheckmarkIcon style={styles.checkmarkIcon} />
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Photos;
