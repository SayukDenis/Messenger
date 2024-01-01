import React from "react";
import { Image, View } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import ModeActivity from "../../Status Content/ModeActivity";
import { connect } from "react-redux";

interface ImageContainerProps {
  urlToPhoto: string;
}

const ImageContainerForChatListContainer: React.FC<ImageContainerProps> = ({
  urlToPhoto,
}) => {
  return (
    <View style={listOfChatsStyle.imageContainer}>
      <Image
        source={{
          uri: urlToPhoto,
        }}
        style={listOfChatsStyle.image}
      />
      <ModeActivity style={listOfChatsStyle.modeOfActivity} status={1} />
    </View>
  );
};

export default connect(null)(ImageContainerForChatListContainer);
