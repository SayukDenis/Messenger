// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import styles from "../Styles";
import MultimediaBar from "./MultimediaBar";
import Photos from "./Photos";
import Files from "./Files";
import Voice from "./Voice";
import Links from "./Links";
import Albums from "./Albums";
import { Album } from "../../DBUser";

interface MultimediaProps {
  isLongPressed: boolean;
  onLongPress: (value: boolean) => void;
  pressedMultimediaButton: string;
  setPressedMultimediaButton: (value: string) => void;
  onNewAlbumPress: () => void;
  setLongPressedAlbum: (value: Album) => void;
}

const Multimedia: React.FC<MultimediaProps> = (props) => {
  return (
    <View style={{ zIndex: props.isLongPressed ? 3 : 0 }}>
      <MultimediaBar
        isLongPressed={props.isLongPressed}
        onLongPress={(value) => props.onLongPress(value)}
        onPress={(value: string) => {
          props.setPressedMultimediaButton(value);
        }}
      />

      {props.pressedMultimediaButton == "Photos" && (
        <Photos isPhotoSelectionAlwaysVisible={false} />
      )}
      {props.pressedMultimediaButton == "Albums" && (
        <Albums
          onNewAlbumPress={() => {
            props.onNewAlbumPress();
          }}
          onAlbumPress={(value: Album) => {
            props.setLongPressedAlbum(value);
          }}
        />
      )}
      {props.pressedMultimediaButton == "Files" && <Files />}
      {props.pressedMultimediaButton == "Voice" && <Voice />}
      {props.pressedMultimediaButton == "Links" && <Links />}
    </View>
  );
};

export default Multimedia;
