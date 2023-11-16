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
import CrossIcon from "../Icons/CrossIcon";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

interface PhotosProps {
  selectedPhotosAndVideos?: Array<PhotoOrVideo>;
  setSelectedPhotosAndVideos?: (value: Array<PhotoOrVideo>) => void;
  isPhotoSelectionAlwaysVisible: boolean;
  data: Array<PhotoOrVideo>;
  onPress?: (value: PhotoOrVideo) => void;
  hasAddNewPhotoFeature?: boolean;
  onAddNewPhotoPress?: () => void;
}

const Photos: React.FC<PhotosProps> = (props) => {
  return (
    <View style={styles.mediaContainer}>
      <FlatList
        data={props.data}
        keyExtractor={(item) => props.data.indexOf(item).toString()}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={{
          gap: 0.002 * Dimensions.get("screen").height,
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
                } else {
                  props.onPress(item);
                }
              }}
              style={[
                styles.photo,
                {
                  left:
                    0.005 *
                    Dimensions.get("screen").width *
                    (props.data.indexOf(item) % 3),
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
      {props.hasAddNewPhotoFeature && (
        <TouchableOpacity
          onPress={() => {
            props.onAddNewPhotoPress();
          }}
          style={[
            styles.photo,
            {
              position: "absolute",
              top: Math.floor(props.data.length / 3) * 0.162 * screenHeight,
              left:
                props.data.length % 3 == 0
                  ? 0
                  : props.data.length % 3 == 1
                  ? 0.335 * screenWidth
                  : 0.67 * screenWidth,
            },
          ]}
        >
          <View
            style={[
              styles.photo,
              {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(32, 32, 32)",
              },
            ]}
          >
            <CrossIcon style={styles.plusAlbumIcon} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Photos;
