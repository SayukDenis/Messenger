// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { Dimensions, View } from "react-native";
import styles from "../Styles";
import MultimediaBar from "./MultimediaBar";
import Photos from "./Photos";
import Files from "./Files";
import Voices from "./Voices";
import Links from "./Links";
import Albums from "./Albums";
import {
  Album,
  PhotoOrVideo,
  Voice,
  File,
  Link,
} from "../../../DatabaseSimulation/DBClasses";
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
  isMultimediaSelectionVisible: boolean;
  onAlbumPress: (value: Album) => void;
  onPhotoPress: (value: PhotoOrVideo) => void;
  onAnyLongPressExceptAlbum: (
    value: PhotoOrVideo | File | Voice | Link
  ) => void;
  isCheckMarkVisible: (
    value: Album | PhotoOrVideo | File | Voice | Link
  ) => boolean;
  onAnyPressWhileSelection: (
    value: Album | PhotoOrVideo | File | Voice
  ) => void;
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
          isPhotoSelectionVisible={props.isMultimediaSelectionVisible}
          data={GetProfile().photosAndVideos}
          onPress={(photo: PhotoOrVideo) => {
            if (props.isMultimediaSelectionVisible) {
              props.onAnyPressWhileSelection(photo);
            } else {
              props.onPhotoPress(photo);
            }
          }}
          onLongPress={(value: PhotoOrVideo) => {
            props.onAnyLongPressExceptAlbum(value);
          }}
          isMultimediaBarEnabled={true}
          isCheckMarkVisible={(value: PhotoOrVideo) =>
            props.isCheckMarkVisible(value)
          }
        />
      )}
      {props.pressedMultimediaButton == "Albums" && (
        <Albums
          onNewAlbumPress={() => {
            props.onNewAlbumPress();
          }}
          onLongPress={(value: Album, event: GestureResponderEvent) => {
            props.onAlbumLongPress(value, event);
          }}
          onPress={(value: Album) => {
            if (props.isMultimediaSelectionVisible) {
              props.onAnyPressWhileSelection(value);
            } else {
              props.onAlbumPress(value);
            }
          }}
          areCheckMarksVisible={props.isMultimediaSelectionVisible}
          isCheckmarkVisible={(value: Album) => props.isCheckMarkVisible(value)}
        />
      )}
      {props.pressedMultimediaButton == "Files" && (
        <Files
          onPress={(value: File) => {
            if (props.isMultimediaSelectionVisible) {
              props.onAnyPressWhileSelection(value);
            }
          }}
          onLongPress={(value: File) => {
            props.onAnyLongPressExceptAlbum(value);
          }}
          onDownloadPress={() => {
            alert("Downloading");
          }}
          isCheckMarkVisible={(value: File) => props.isCheckMarkVisible(value)}
          isSelectionVisible={props.isMultimediaSelectionVisible}
        />
      )}
      {props.pressedMultimediaButton == "Voice" && (
        <Voices
          onPress={(value: Voice) => {
            if (props.isMultimediaSelectionVisible) {
              props.onAnyPressWhileSelection(value);
            }
          }}
          onLongPress={(value: Voice) => {
            props.onAnyLongPressExceptAlbum(value);
          }}
          isCheckMarkVisible={(value: Voice) => props.isCheckMarkVisible(value)}
          isSelectionVisible={props.isMultimediaSelectionVisible}
        />
      )}
      {props.pressedMultimediaButton == "Links" && (
        <Links
          onPress={(value: Link) => {
            if (props.isMultimediaSelectionVisible) {
              props.onAnyPressWhileSelection(value);
            }
          }}
          isSelectionVisible={props.isMultimediaSelectionVisible}
          onLongPress={(value: Link) => {
            props.onAnyLongPressExceptAlbum(value);
          }}
          isCheckMarkVisible={(value: Link) => props.isCheckMarkVisible(value)}
        />
      )}
    </View>
  );
};

export default Multimedia;
