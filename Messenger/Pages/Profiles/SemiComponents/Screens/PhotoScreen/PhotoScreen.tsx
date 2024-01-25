// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import ImageViewer from "react-native-image-zoom-viewer";
import PhotoToolBar from "./PhotoToolBar";
import EyeIcon from "../MainScreen/Icons/EyeIcon";
import DownArrowIcon from "../MainScreen/Icons/DownArrowIcon";
import BinIcon from "../MainScreen/Icons/BinIcon";
import Blur from "../../GeneralComponents/Blur";
import ForwardContactIcon from "../MainScreen/Icons/ForwardContactIcon";

type PhotoScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const PhotoScreen: React.FC<PhotoScreenProps> = (props) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(
    GetProfile().photosAndVideos.indexOf(GetProfile().selectedPhoto) < 0
      ? GetProfile().photosAndVideos.length - 1
      : GetProfile().photosAndVideos.indexOf(GetProfile().selectedPhoto)
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
            GetProfile().photosAndVideos.length.toString()
          }
        />
      )}

      <ImageViewer
        imageUrls={GetProfile().photosAndVideos.map((image) => ({
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
          if (currentPhotoIndex != GetProfile().photosAndVideos.length - 1) {
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
              GetProfile().photosAndVideos.splice(currentPhotoIndex, 1);
              setIsElseFeaturesVisible(false);
              props.navigation.goBack();

              if (GetProfile().photosAndVideos.length != 0) {
                GetProfile().selectedPhoto =
                  GetProfile().photosAndVideos[currentPhotoIndex];

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
