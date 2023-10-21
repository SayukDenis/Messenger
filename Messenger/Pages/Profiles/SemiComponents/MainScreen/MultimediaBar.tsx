// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles } from "../ProfileStyles";

interface MultimediaBarProps {
  isLongPressed: boolean;
  onLongPress: (value: boolean) => void;
}

const MultimediaBar: React.FC<MultimediaBarProps> = (props) => {
  const [maxQuantitiesTitleWidth, setMaxQuantitiesTitleWidth] = useState(0);

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

  // !!!!!!!ПЕРЕРОБИТИ!!!!!!!
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

  // Finding max width for multimedia quantities containter
  const CalculateMaxQuantitiesTitleWidth = () => {
    return (
      <View style={{ position: "absolute", opacity: 0 }}>
        <Text
          style={styles.multimediaQuantityTitle}
          onLayout={(event) => {
            event.nativeEvent.layout.width > maxQuantitiesTitleWidth &&
              setMaxQuantitiesTitleWidth(event.nativeEvent.layout.width);
          }}
        >
          {`${photosQuantity.toLocaleString()} ${photosButtonTitle.toLowerCase()}, ${videosQuantity.toLocaleString()} ${videosButtonTitle.toLowerCase()}`}
        </Text>
        {indexes.map(
          (index) =>
            index != 0 &&
            index != 1 && (
              <Text
                key={index}
                style={styles.multimediaQuantityTitle}
                onLayout={(event) => {
                  event.nativeEvent.layout.width > maxQuantitiesTitleWidth &&
                    setMaxQuantitiesTitleWidth(event.nativeEvent.layout.width);
                }}
              >{`${quantities[index].toLocaleString()} ${buttonTitles[
                index
              ].toLowerCase()}`}</Text>
            )
        )}
      </View>
    );
  };

  useEffect(() => {
    setMaxQuantitiesTitleWidth(0);
  }, []);

  return (
    <View
      style={[
        styles.multimediaBar,
        { zIndex: props.isLongPressed === true ? 2 : 0 },
      ]}
    >
      <CalculateMaxQuantitiesTitleWidth />
      {/* Container that shows quantities of currently pressed multimedia */}
      <View
        style={[
          styles.multimediaQuantitiesContainer,
          { width: maxQuantitiesTitleWidth + 20 },
        ]}
      >
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
          props.onLongPress(false);
        }}
        onLongPress={() => {
          props.onLongPress(true);
        }}
      >
        <View>
          {props.isLongPressed === true && (
            <TouchableWithoutFeedback
              onPress={() => {
                props.onLongPress(false);
                setPhotosAndAlbumsState((prevState) =>
                  prevState == "Photos" ? "Albums" : "Photos"
                );
                setPressedMultimediaButton(
                  photosAndAlbumsState == "Photos" ? "Albums" : "Photos"
                );
              }}
            >
              <View style={styles.albumsOrPhotosAppearingButton}>
                <Text style={styles.multimediaTitle}>
                  {photosAndAlbumsState === "Albums"
                    ? photosButtonTitle
                    : albumsButtonTitle}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          <View style={styles.photosOrAlbumsSelectedName}>
            <Text style={styles.multimediaTitle}>
              {photosAndAlbumsState === "Albums"
                ? albumsButtonTitle
                : photosButtonTitle}
            </Text>
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
                props.onLongPress(false);
              }}
            >
              <View
                style={
                  buttonsList[index] === "Files" ? styles.filesButton : null
                }
              >
                <Text style={styles.multimediaTitle}>
                  {buttonTitles[index]}
                </Text>
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
