// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles.tsx";
import Photos from "./Photos.tsx";
import { user } from "../DBUser.tsx";

class Button {
  name: string;
  title: string;
  quantity: number;
  constructor(name: string, title: string, quantity: number) {
    this.name = name;
    this.title = title;
    this.quantity = quantity;
  }
}

interface MultimediaBarProps {
  isLongPressed: boolean;
  onLongPress: (value: boolean) => void;
  onPress: (value: string) => void;
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

  // Shows which multimedia button is currently pressed
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");

  // Shows photos or albums is selected
  const [photosAndAlbumsState, setPhotosAndAlbumsState] = useState("Photos");

  const buttonData: Button[] = [
    {
      name: "Photos",
      title: photosButtonTitle,
      quantity: photosQuantity,
    },
    {
      name: "Albums",
      title: albumsButtonTitle,
      quantity: albumsQuantity,
    },
    {
      name: "Files",
      title: filesButtonTitle,
      quantity: user.files.length,
    },
    {
      name: "Voice",
      title: voiceButtonTitle,
      quantity: user.voice.length,
    },
    {
      name: "Links",
      title: linksButtonTitle,
      quantity: user.links.length,
    },
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
        {buttonData.map(
          (button) =>
            button.name != "Photos" &&
            button.name != "Albums" && (
              <Text
                key={button.name}
                style={styles.multimediaQuantityTitle}
                onLayout={(event) => {
                  event.nativeEvent.layout.width > maxQuantitiesTitleWidth &&
                    setMaxQuantitiesTitleWidth(event.nativeEvent.layout.width);
                }}
              >{`${button.quantity.toLocaleString()} ${button.title.toLowerCase()}`}</Text>
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
        {buttonData.map(
          (button) =>
            button.name != "Photos" &&
            pressedMultimediaButton === button.name && (
              <Text
                key={button.name}
                style={styles.multimediaQuantityTitle}
              >{`${button.quantity.toLocaleString()} ${button.title.toLowerCase()}`}</Text>
            )
        )}
      </View>

      {/* Photos or albums button, after long pressing selection between photos and albums appears */}
      <TouchableOpacity
        onPress={() => {
          setPressedMultimediaButton(photosAndAlbumsState);
          props.onPress(photosAndAlbumsState);
          props.onLongPress(false);
        }}
        onLongPress={() => {
          props.onLongPress(true);
        }}
      >
        {props.isLongPressed === true && (
          <TouchableOpacity
            onPress={() => {
              props.onLongPress(false);
              setPhotosAndAlbumsState((prevState) =>
                prevState == "Photos" ? "Albums" : "Photos"
              );
              setPressedMultimediaButton(
                photosAndAlbumsState == "Photos" ? "Albums" : "Photos"
              );
              props.onPress(
                photosAndAlbumsState == "Photos" ? "Albums" : "Photos"
              );
            }}
            style={styles.albumsOrPhotosAppearingButton}
          >
            <Text style={styles.multimediaTitle}>
              {photosAndAlbumsState === "Albums"
                ? photosButtonTitle
                : albumsButtonTitle}
            </Text>
          </TouchableOpacity>
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
      </TouchableOpacity>

      {/* Files, voice, links buttons */}
      {buttonData.map(
        (button) =>
          button.name != "Photos" &&
          button.name != "Albums" && (
            <TouchableOpacity
              key={button.name}
              onPress={() => {
                setPressedMultimediaButton(button.name);
                props.onPress(button.name);
                props.onLongPress(false);
              }}
              style={button.name === "Files" ? styles.filesButton : null}
            >
              <Text style={styles.multimediaTitle}>{button.title}</Text>
              {pressedMultimediaButton === button.name && (
                <View style={styles.rectangleUnderMultimediaButton} />
              )}
            </TouchableOpacity>
          )
      )}
    </View>
  );
};

export default MultimediaBar;
