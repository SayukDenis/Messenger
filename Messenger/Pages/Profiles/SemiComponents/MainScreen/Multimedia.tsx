// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {} from "react-native";
import styles from "./Styles.tsx";
import MultimediaBar from "./MultimediaBar.tsx";
import Photos from "./Photos.tsx";
import Files from "./Files.tsx";

interface MultimediaProps {
  isLongPressed: boolean;
  onLongPress: (value: boolean) => void;
}

const Multimedia: React.FC<MultimediaProps> = (props) => {
  const [pressedMultimediaButton, setPressedMultimediaButton] =
    useState("Photos");

  useEffect(() => {
    console.log(pressedMultimediaButton);
  });
  return (
    <>
      <MultimediaBar
        isLongPressed={props.isLongPressed}
        onLongPress={(value) => props.onLongPress(value)}
        onPress={(value: string) => {
          setPressedMultimediaButton(value);
        }}
      />

      {pressedMultimediaButton == "Photos" && <Photos />}
      {pressedMultimediaButton == "Files" && <Files />}
    </>
  );
};

export default Multimedia;
