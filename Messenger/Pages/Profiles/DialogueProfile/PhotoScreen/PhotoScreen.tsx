// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { tempUser, user } from "../../SemiComponents/DBUser";
import ImageViewer from "react-native-image-zoom-viewer";
import PhotoToolBar from "../../SemiComponents/PhotoScreen/PhotoToolBar";
import EyeIcon from "../../SemiComponents/MainScreen/Icons/EyeIcon";
import DownArrowIcon from "../../SemiComponents/MainScreen/Icons/DownArrowIcon";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";
import Blur from "../../SemiComponents/Blur";
import ForwardContactIcon from "../../SemiComponents/MainScreen/Icons/ForwardContactIcon";

type PhotoScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const PhotoScreen: React.FC<PhotoScreenProps> = (props) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(
    user.photosAndVideos.indexOf(tempUser.selectedPhoto) < 0
      ? user.photosAndVideos.length - 1
      : user.photosAndVideos.indexOf(tempUser.selectedPhoto)
  );
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isToolBarVisible, setIsToolBarVisible] = useState(true);

  return (
    <View style={styles.mainContainer}>
      {/* Blur when else features button is pressed */}
      <Blur
        visibleWhen={isElseFeaturesVisible}
        onPress={() => {
          setIsElseFeaturesVisible(false);
        }}
        style={[styles.blurEffect, { zIndex: 2 }]}
      />

      {isToolBarVisible && (
        <PhotoToolBar
          onGoBackPress={() => {
            props.navigation.goBack();
          }}
          onElseFeaturesPress={() => {
            setIsElseFeaturesVisible(true);
          }}
          title={
            (currentPhotoIndex + 1).toString() +
            " of " +
            user.photosAndVideos.length.toString()
          }
        />
      )}

      <ImageViewer
        imageUrls={user.photosAndVideos.map((image) => ({
          url: image.url,
        }))}
        index={currentPhotoIndex}
        onChange={(index) => {
          setCurrentPhotoIndex(index);
        }}
        onClick={() => {
          setIsToolBarVisible((value) => !value);
        }}
        renderIndicator={() => null}
        saveToLocalByLongPress={false}
      />

      {/* TouchableOpacity that shows previous photo */}
      <TouchableOpacity
        style={styles.leftOpacityToSeePreviousPhoto}
        onPress={() => {
          if (currentPhotoIndex != 0) {
            const index = currentPhotoIndex;
            setCurrentPhotoIndex(index - 1);
          }
        }}
      />

      {/* TouchableOpacity that shows next photo */}
      <TouchableOpacity
        style={styles.rightOpacityToSeePreviousPhoto}
        onPress={() => {
          if (currentPhotoIndex != user.photosAndVideos.length - 1) {
            const index = currentPhotoIndex;
            setCurrentPhotoIndex(index + 1);
          }
        }}
      />

      {isElseFeaturesVisible && (
        <View style={styles.elseFeaturesButtonsContainer}>
          {/* Show in chat button */}
          <TouchableOpacity
            onPress={() => {
              alert("show in chat");
            }}
            style={styles.additionalFeatureButton}
          >
            <EyeIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Show in chat</Text>
          </TouchableOpacity>

          {/* Download button */}
          <TouchableOpacity
            onPress={() => {
              alert("download");
            }}
            style={styles.additionalFeatureButton}
          >
            <DownArrowIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Download</Text>
          </TouchableOpacity>

          {/* Forward button */}
          <TouchableOpacity
            onPress={() => {
              alert("forward");
            }}
            style={styles.additionalFeatureButton}
          >
            <ForwardContactIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Forward</Text>
          </TouchableOpacity>

          {/* Delete button */}
          <TouchableOpacity
            style={styles.additionalFeatureButton}
            onPress={() => {
              user.photosAndVideos.splice(currentPhotoIndex, 1);
              setIsElseFeaturesVisible(false);
              props.navigation.goBack();

              if (user.photosAndVideos.length != 0) {
                tempUser.selectedPhoto =
                  user.photosAndVideos[currentPhotoIndex];

                props.navigation.navigate("PhotoScreen" as never);
              }
            }}
          >
            <BinIcon style={styles.additionalFeatureIcon} />
            <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PhotoScreen;
