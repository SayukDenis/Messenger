//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { styles, JacquesFrancoisText } from "./Styles";
import { BlurView } from "expo-blur";

interface MultimediaBarProps {
  isShownAlbumsSelectButton: boolean;
  setIsShownAlbumsSelectButton: (value: boolean) => void;
}

const MultimediaBar: React.FC<MultimediaBarProps> = (props) => {
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");

  const [photosAndAlbumsState, setPhotosAndAlbumsState] = useState("Photos");

  return (
    <View style={styles.multimediaBar}>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton(photosAndAlbumsState);
          props.setIsShownAlbumsSelectButton(false);
        }}
        onLongPress={() => {
          props.setIsShownAlbumsSelectButton(true);
        }}
      >
        <View>
          {props.isShownAlbumsSelectButton === true && (
            <TouchableWithoutFeedback
              onPress={() => {
                props.setIsShownAlbumsSelectButton(false);
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
                  text={photosAndAlbumsState === "Albums" ? "Photos" : "Albums"}
                  style={styles.multimediaTitle}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
          <View style={styles.photosOrAlbumsSelectedName}>
            <JacquesFrancoisText
              text={photosAndAlbumsState}
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
          props.setIsShownAlbumsSelectButton(false);
        }}
      >
        <View>
          <JacquesFrancoisText text="Files" style={styles.multimediaTitle} />
          {pressedMultimediaButton === "Files" && (
            <View style={styles.rectangleUnderMultimediaButton} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Voice");
          props.setIsShownAlbumsSelectButton(false);
        }}
      >
        <View>
          <JacquesFrancoisText text="Voice" style={styles.multimediaTitle} />
          {pressedMultimediaButton === "Voice" && (
            <View style={styles.rectangleUnderMultimediaButton} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Links");
          props.setIsShownAlbumsSelectButton(false);
        }}
      >
        <View>
          <JacquesFrancoisText text="Links" style={styles.multimediaTitle} />
          {pressedMultimediaButton === "Links" && (
            <View style={styles.rectangleUnderMultimediaButton} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MultimediaBar;
