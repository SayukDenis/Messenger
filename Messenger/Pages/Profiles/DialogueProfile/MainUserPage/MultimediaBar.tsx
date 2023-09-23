//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles, JacquesFrancoisText } from "./Styles";
import { BlurView } from "expo-blur";

interface MultimediaBarProps {
  isPhotoAlbumSelectionVisible: boolean;
  setIsPhotoAlbumSelectionVisible: (value: boolean) => void;
  photosButtonTitle: string;
  albumsButtonTitle: string;
  filesButtonTitle: string;
  voiceButtonTitle: string;
  linksButtonTitle: string;
  videosButtonTitle: string;

  photosQuantity: number;
  videosQuantity: number;
  albumsQuantity: number;
  filesQuantity: number;
  voiceQuantity: number;
  linksQuantity: number;
}

const MultimediaBar: React.FC<MultimediaBarProps> = (props) => {
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");

  const [photosAndAlbumsState, setPhotosAndAlbumsState] = useState("Photos");

  return (
    <View style={styles.multimediaBar}>
      <View style={styles.multimediaQuantitiesContainer}>
        {pressedMultimediaButton === "Photos" && (
          <Text
            style={styles.multimediaQuantityTitle}
          >{`${props.photosQuantity.toLocaleString()} ${props.photosButtonTitle.toLowerCase()}, ${props.videosQuantity.toLocaleString()} ${props.videosButtonTitle.toLowerCase()}`}</Text>
        )}
        {pressedMultimediaButton === "Albums" && (
          <Text
            style={styles.multimediaQuantityTitle}
          >{`${props.albumsQuantity.toLocaleString()} ${props.albumsButtonTitle.toLowerCase()}`}</Text>
        )}
        {pressedMultimediaButton === "Files" && (
          <Text
            style={styles.multimediaQuantityTitle}
          >{`${props.filesQuantity.toLocaleString()} ${props.filesButtonTitle.toLowerCase()}`}</Text>
        )}
        {pressedMultimediaButton === "Voice" && (
          <Text
            style={styles.multimediaQuantityTitle}
          >{`${props.voiceQuantity.toLocaleString()} ${props.voiceButtonTitle.toLowerCase()}`}</Text>
        )}
        {pressedMultimediaButton === "Links" && (
          <Text
            style={styles.multimediaQuantityTitle}
          >{`${props.linksQuantity.toLocaleString()} ${props.linksButtonTitle.toLowerCase()}`}</Text>
        )}
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton(photosAndAlbumsState);
          props.setIsPhotoAlbumSelectionVisible(false);
        }}
        onLongPress={() => {
          props.setIsPhotoAlbumSelectionVisible(true);
        }}
      >
        <View>
          {props.isPhotoAlbumSelectionVisible === true && (
            <TouchableWithoutFeedback
              onPress={() => {
                props.setIsPhotoAlbumSelectionVisible(false);
                setPhotosAndAlbumsState((prevState) =>
                  prevState == "Photos" ? "Albums" : "Photos"
                );
                setPressedMultimediaButton(
                  photosAndAlbumsState == "Photos" ? "Albums" : "Photos"
                );
              }}
            >
              <View style={styles.albumsOrPhotosAppearingButton}>
                <JacquesFrancoisText
                  text={
                    photosAndAlbumsState === "Albums"
                      ? props.photosButtonTitle
                      : props.albumsButtonTitle
                  }
                  style={styles.multimediaTitle}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
          <View style={styles.photosOrAlbumsSelectedName}>
            <JacquesFrancoisText
              text={
                photosAndAlbumsState === "Albums"
                  ? props.albumsButtonTitle
                  : props.photosButtonTitle
              }
              style={styles.multimediaTitle}
            />
            {pressedMultimediaButton === photosAndAlbumsState && (
              <View style={styles.rectangleUnderPhotosOrAlbumsButton} />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Files");
          props.setIsPhotoAlbumSelectionVisible(false);
        }}
      >
        <View style={styles.filesButton}>
          <JacquesFrancoisText
            text={props.filesButtonTitle}
            style={styles.multimediaTitle}
          />
          {pressedMultimediaButton === "Files" && (
            <View style={styles.rectangleUnderMultimediaButton} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Voice");
          props.setIsPhotoAlbumSelectionVisible(false);
        }}
      >
        <View>
          <JacquesFrancoisText
            text={props.voiceButtonTitle}
            style={styles.multimediaTitle}
          />
          {pressedMultimediaButton === "Voice" && (
            <View style={styles.rectangleUnderMultimediaButton} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Links");
          props.setIsPhotoAlbumSelectionVisible(false);
        }}
      >
        <View>
          <JacquesFrancoisText
            text={props.linksButtonTitle}
            style={styles.multimediaTitle}
          />
          {pressedMultimediaButton === "Links" && (
            <View style={styles.rectangleUnderMultimediaButton} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MultimediaBar;
