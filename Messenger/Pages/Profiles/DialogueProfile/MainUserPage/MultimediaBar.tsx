// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles, JacquesFrancoisText } from "./Styles";

interface MultimediaBarProps {
  isphotoOrAlbumButtonHolding: boolean;
  photoOrAlbumButtonHolding: (value: boolean) => void;
}

const MultimediaBar: React.FC<MultimediaBarProps> = (props) => {
  const photosButtonTitle: string = "Photos";
  const albumsButtonTitle: string = "Albums";
  const filesButtonTitle: string = "Files";
  const voiceButtonTitle: string = "Voice";
  const linksButtonTitle: string = "Links";
  const videosButtonTitle: string = "Videos";

  const photosQuantity: number = 600;
  const videosQuantity: number = 20;
  const albumsQuantity: number = 50;
  const filesQuantity: number = 3;
  const voiceQuantity: number = 3214;
  const linksQuantity: number = 5;

  // Shows which multimedia button is currently pressed
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");

  // Shows photos or albums is selected
  const [photosAndAlbumsState, setPhotosAndAlbumsState] = useState("Photos");

  const indexes: number[] = [0, 1, 2, 3, 4];
  const buttonsList: string[] = ["Photos", "Albums", "Files", "Voice", "Links"];
  const buttonTitles: string[] = [
    photosButtonTitle,
    albumsButtonTitle,
    filesButtonTitle,
    voiceButtonTitle,
    linksButtonTitle,
  ];
  const quantities: number[] = [
    photosQuantity,
    albumsQuantity,
    filesQuantity,
    voiceQuantity,
    linksQuantity,
  ];

  return (
    <View
      style={[
        styles.multimediaBar,
        { zIndex: props.isphotoOrAlbumButtonHolding === true ? 2 : 0 },
      ]}
    >
      {/* Container that shows quantities of currently pressed multimedia */}
      <View style={styles.multimediaQuantitiesContainer}>
        {pressedMultimediaButton === "Photos" && (
          <Text
            style={styles.multimediaQuantityTitle}
          >{`${photosQuantity.toLocaleString()} ${photosButtonTitle.toLowerCase()}, ${videosQuantity.toLocaleString()} ${videosButtonTitle.toLowerCase()}`}</Text>
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

      {/* Photos or albums button, after long pressing selection between photos and albums appears */}
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
                      ? photosButtonTitle
                      : albumsButtonTitle
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
                  ? albumsButtonTitle
                  : photosButtonTitle
              }
              style={styles.multimediaTitle}
            />
            {pressedMultimediaButton === photosAndAlbumsState && (
              <View style={styles.rectangleUnderPhotosOrAlbumsButton} />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Files, voice, links buttons */}
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
