//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles, JacquesFrancoisText } from "./Styles";

interface MultimediaBarProps {
  isphotoOrAlbumButtonHolding: boolean;
  photoOrAlbumButtonHolding: (value: boolean) => void;
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

  const indexes: number[] = [0, 1, 2, 3, 4];
  const buttonsList: string[] = ["Photos", "Albums", "Files", "Voice", "Links"];
  const buttonTitles: string[] = [
    props.photosButtonTitle,
    props.albumsButtonTitle,
    props.filesButtonTitle,
    props.voiceButtonTitle,
    props.linksButtonTitle,
  ];
  const quantities: number[] = [
    props.photosQuantity,
    props.albumsQuantity,
    props.filesQuantity,
    props.voiceQuantity,
    props.linksQuantity,
  ];

  return (
    <View
      style={[
        styles.multimediaBar,
        { zIndex: props.isphotoOrAlbumButtonHolding === true ? 2 : 0 },
      ]}
    >
      <View style={styles.multimediaQuantitiesContainer}>
        {pressedMultimediaButton === "Photos" && (
          <Text
            style={styles.multimediaQuantityTitle}
          >{`${props.photosQuantity.toLocaleString()} ${props.photosButtonTitle.toLowerCase()}, ${props.videosQuantity.toLocaleString()} ${props.videosButtonTitle.toLowerCase()}`}</Text>
        )}
        {indexes.map(
          (index) =>
            index != 0 &&
            pressedMultimediaButton === buttonsList[index] && (
              <Text
                key={index}
                style={styles.multimediaQuantityTitle}
              >{`${quantities[index].toLocaleString()} ${buttonTitles[
                index
              ].toLowerCase()}`}</Text>
            )
        )}
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton(photosAndAlbumsState);
          props.photoOrAlbumButtonHolding(false);
        }}
        onLongPress={() => {
          props.photoOrAlbumButtonHolding(true);
        }}
      >
        <View>
          {props.isphotoOrAlbumButtonHolding === true && (
            <TouchableWithoutFeedback
              onPress={() => {
                props.photoOrAlbumButtonHolding(false);
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
      {indexes.map(
        (index) =>
          index != 0 &&
          index != 1 && (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                setPressedMultimediaButton(buttonsList[index]);
                props.photoOrAlbumButtonHolding(false);
              }}
            >
              <View
                style={
                  buttonsList[index] === "Files" ? styles.filesButton : null
                }
              >
                <JacquesFrancoisText
                  text={buttonTitles[index]}
                  style={styles.multimediaTitle}
                />
                {pressedMultimediaButton === buttonsList[index] && (
                  <View style={styles.rectangleUnderMultimediaButton} />
                )}
              </View>
            </TouchableWithoutFeedback>
          )
      )}
    </View>
  );
};

export default MultimediaBar;
