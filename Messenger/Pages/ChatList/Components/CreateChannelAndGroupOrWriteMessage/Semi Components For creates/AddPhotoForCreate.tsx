import React from "react";
import { Image, View } from "react-native";
import { screenWidth } from "../../../Constants/ConstantsForChatlist";
import CameraSVG from "../../../../SemiComponents/CameraSVG";
import { useSelector } from "react-redux";

interface AddPhotoForCreateProps {}

const AddPhotoForCreate: React.FC<AddPhotoForCreateProps> = ({}) => {
  const selectedPhoto: string = useSelector((state: any) => {
    return state.chatListReducer.setPhotoForCreateGroupOrChannel
      .photoForCreateGroupOrChannel;
  });
  const radiusOfPhotoContiner = screenWidth * 0.33;
 // console.log(selectedPhoto);
  return (
    <View
      style={{
        alignSelf: "center",
        backgroundColor: "#E3CFB1",
        borderRadius: 100,
        height: radiusOfPhotoContiner,
        aspectRatio: 1,
        marginTop: 20,
        justifyContent: "center",
        overflow:"hidden"
      }}
    >
      <View style={{ alignSelf: "center" }}>
        {selectedPhoto == "" ? (
          <CameraSVG />
        ) : (
          <Image
            source={{ uri: selectedPhoto }}
            style={{ height: radiusOfPhotoContiner, aspectRatio: 1 }}
          />
        )}
      </View>
    </View>
  );
};

export default AddPhotoForCreate;
