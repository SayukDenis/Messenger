// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { PhotoOrVideo } from "../../../DatabaseSimulation/DBClasses";
import styles from "../Styles";
import CheckMarkIcon from "../Icons/CheckMarkIcon";
import CrossIcon from "../Icons/CrossIcon";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const figmaHeightPixelConverter = screenHeight / 648;

interface PhotosProps {
  isPhotoSelectionVisible: boolean;
  data: Array<PhotoOrVideo>;
  onPress: (value: PhotoOrVideo) => void;
  onLongPress?: (value: PhotoOrVideo) => void;
  hasAddNewPhotoFeature?: boolean;
  onAddNewPhotoPress?: () => void;
  isMultimediaBarEnabled?: boolean;
  isCheckMarkVisible?: (value: PhotoOrVideo) => boolean;
}

const Photos: React.FC<PhotosProps> = (props) => {
  return (
    <View
      style={[
        styles.mediaContainer,
        {
          opacity: 1,
          top: props.isMultimediaBarEnabled
            ? 25 * figmaHeightPixelConverter
            : 0,
        },
      ]}
    >
      <FlatList
        data={props.data}
        keyExtractor={(item) => props.data.indexOf(item).toString()}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={{
          gap: 0.002 * screenHeight,
          paddingBottom: 0.65 * screenHeight,
        }}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.onPress(item);
              }}
              onLongPress={() => {
                props.onLongPress(item);
              }}
              style={[
                styles.photo,
                {
                  left: 0.005 * screenWidth * (props.data.indexOf(item) % 3),
                },
              ]}
            >
              <Image style={styles.photo} source={{ uri: item.url }} />
              {props.isPhotoSelectionVisible && (
                <View style={styles.checkMarkContainerForPhoto}>
                  {props.isCheckMarkVisible(item) && (
                    <CheckMarkIcon style={styles.checkMarkIcon} />
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
