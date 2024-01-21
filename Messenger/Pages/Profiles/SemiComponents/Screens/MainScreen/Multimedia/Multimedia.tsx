// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { Dimensions, View } from "react-native";
import styles from "../Styles";
import MultimediaBar from "./MultimediaBar";
import Photos from "./Photos";
import Files from "./Files";
import Voice from "./Voice";
import Links from "./Links";
import Albums from "./Albums";
import { Album, PhotoOrVideo } from "../../../DatabaseSimulation/DBClasses";
import Blur from "../../../GeneralComponents/Blur";
import { GestureResponderEvent } from "react-native-modal";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";

interface MultimediaProps {
  isPhotoAlbumSelectionVisible: boolean;
  setIsPhotoAlbumSelectionVisible: (value: boolean) => void;
  pressedMultimediaButton: string;
  setPressedMultimediaButton: (value: string) => void;
  onNewAlbumPress: () => void;
  onAlbumLongPress: (value: Album, event: GestureResponderEvent) => void;
  isAlbumSelectionVisible: boolean;
  onAlbumPress: (value: Album) => void;
  onPhotoPress: (value: PhotoOrVideo) => void;
  isAlbumCheckMarkVisible: (value: Album) => boolean;
}

const Multimedia: React.FC<MultimediaProps> = (props) => {
  return (
    <View
      style={{
        zIndex: props.isPhotoAlbumSelectionVisible ? 3 : 0,
        top: 0.02 * Dimensions.get("screen").height,
      }}
    >
      <Blur
        visibleWhen={props.isPhotoAlbumSelectionVisible}
        onPress={() => {
          props.setIsPhotoAlbumSelectionVisible(false);
        }}
        style={[
          styles.blurEffect,
          { top: 0.05 * Dimensions.get("screen").height },
        ]}
      />

      <MultimediaBar
        isPhotoAlbumSelectionVisible={props.isPhotoAlbumSelectionVisible}
        onLongPress={(value) => props.setIsPhotoAlbumSelectionVisible(value)}
        onPress={(value: string) => {
          props.setPressedMultimediaButton(value);
        }}
      />

      {props.pressedMultimediaButton == "Photos" && (
        <Photos
          isPhotoSelectionVisible={false}
          data={GetProfile().photosAndVideos}
          onPress={(photo: PhotoOrVideo) => {
            props.onPhotoPress(photo);
          }}
          isMultimediaBarEnabled={true}
        />
      )}
      {props.pressedMultimediaButton == "Albums" && (
        <Albums
          onNewAlbumPress={() => {
            props.onNewAlbumPress();
          }}
          onAlbumLongPress={(value: Album, event: GestureResponderEvent) => {
            props.onAlbumLongPress(value, event);
          }}
          onAlbumPress={(value: Album) => {
            props.onAlbumPress(value);
          }}
          areCheckMarksVisible={props.isAlbumSelectionVisible}
          isCheckmarkVisible={(value: Album) =>
            props.isAlbumCheckMarkVisible(value)
          }
        />
      )}
      {props.pressedMultimediaButton == "Files" && <Files />}
      {props.pressedMultimediaButton == "Voice" && <Voice />}
      {props.pressedMultimediaButton == "Links" && <Links />}
    </View>
  );
};

export default Multimedia;
