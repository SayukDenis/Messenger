import { TouchableOpacity } from "react-native";
import PhotoOrIconContainer from "./PhotoOrIconContainer";
import AddPhotoContainer from "./AddPhotoContainer";
import React from "react";

interface PhotoAddButtonContainerProps {
  pressOnAddPhoto: () => void;
}

const PhotoAddButtonContainer: React.FC<PhotoAddButtonContainerProps> = ({
  pressOnAddPhoto,
}) => {
  return (
    <TouchableOpacity
      onPress={pressOnAddPhoto}
      style={{
        // backgroundColor: "black",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <PhotoOrIconContainer />
      <AddPhotoContainer />
    </TouchableOpacity>
  );
};

export default PhotoAddButtonContainer;