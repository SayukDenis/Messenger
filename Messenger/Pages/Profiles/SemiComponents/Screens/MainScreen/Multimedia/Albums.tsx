// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
} from "react-native";
import { Album } from "../../../DatabaseSimulation/DBClasses";
import styles from "../Styles";
import CrossIcon from "../Icons/CrossIcon";
import CheckmarkIcon from "../Icons/CheckMarkIcon";
import { GestureResponderEvent } from "react-native-modal";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";

interface AlbumsProps {
  onNewAlbumPress: () => void;
  onLongPress: (value: Album, event: GestureResponderEvent) => void;
  onPress: (value: Album) => void;
  areCheckMarksVisible: boolean;
  isCheckmarkVisible: (value: Album) => boolean;
}

const screenHeight: number = Dimensions.get("screen").height;
const screenWidth: number = Dimensions.get("screen").width;

const Albums: React.FC<AlbumsProps> = (props) => {
  return (
    <View style={[styles.mediaContainer, { opacity: 1 }]}>
      <FlatList
        data={GetProfile().albums}
        keyExtractor={(item) => GetProfile().albums.indexOf(item).toString()}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={[
          styles.allAlbumsContainer,
          {
            height:
              GetProfile().albums.length < 3
                ? GetProfile().albums.length == 1
                  ? 0.8 * screenHeight
                  : 0.7 * screenHeight
                : Math.ceil(GetProfile().albums.length / 2) *
                  0.355 *
                  screenHeight,
          },
        ]}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.onPress(item);
              }}
              onLongPress={(event) => {
                props.onLongPress(item, event);
              }}
              style={[styles.albumContainer]}
            >
              <Image
                style={styles.albumMainPhoto}
                source={{ uri: item.mainPhoto.url }}
              />
              <View style={styles.albumInfoContainer}>
                <Text numberOfLines={1} style={styles.albumNameText}>
                  {item.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={styles.albumPhotosAndVideosQuantityText}
                >
                  {item.photosAndVideos.length}
                </Text>
                {props.areCheckMarksVisible && (
                  <View style={styles.checkMarkContainerForAlbum}>
                    {props.isCheckmarkVisible(item) && (
                      <CheckmarkIcon style={styles.checkMarkIcon} />
                    )}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.onNewAlbumPress();
        }}
        style={[
          styles.albumContainer,
          {
            position: "absolute",
            top:
              GetProfile().albums.length % 2 == 0
                ? 0.02 * screenHeight +
                  Math.ceil(GetProfile().albums.length / 2) *
                    0.205 *
                    screenHeight
                : 0.02 * screenHeight +
                  (Math.ceil(GetProfile().albums.length / 2) - 1) *
                    0.205 *
                    screenHeight,
            left:
              GetProfile().albums.length % 2 == 0
                ? 0.075 * screenWidth
                : 0.575 * screenWidth,
          },
        ]}
      >
        <View
          style={[
            styles.albumMainPhoto,
            { backgroundColor: "rgb(32, 32, 32)" },
          ]}
        >
          <CrossIcon style={styles.plusAlbumIcon} />
        </View>
        <View style={styles.albumInfoContainer}>
          <Text numberOfLines={1} style={styles.albumNameText}>
            New album
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Albums;
