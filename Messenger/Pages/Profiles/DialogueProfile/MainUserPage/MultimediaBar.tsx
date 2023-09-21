//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { styles, JacquesFrancoisText } from "./Styles";

interface MultimediaBarProps {}

const MultimediaBar: React.FC<MultimediaBarProps> = (props) => {
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");

  return (
    <View style={styles.multimediaBar}>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Photos");
        }}
      >
        <View>
          <JacquesFrancoisText text="Photos" style={styles.multimediaTitle} />
          {pressedMultimediaButton === "Photos" && (
            <View style={styles.rectangleUnderMultimedia} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Files");
        }}
      >
        <View>
          <JacquesFrancoisText text="Files" style={styles.multimediaTitle} />
          {pressedMultimediaButton === "Files" && (
            <View style={styles.rectangleUnderMultimedia} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Voice");
        }}
      >
        <View>
          <JacquesFrancoisText text="Voice" style={styles.multimediaTitle} />
          {pressedMultimediaButton === "Voice" && (
            <View style={styles.rectangleUnderMultimedia} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressedMultimediaButton("Links");
        }}
      >
        <View>
          <JacquesFrancoisText text="Links" style={styles.multimediaTitle} />
          {pressedMultimediaButton === "Links" && (
            <View style={styles.rectangleUnderMultimedia} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MultimediaBar;
