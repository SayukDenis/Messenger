import React from "react";
import { Image, View } from "react-native";
import UserIconSvg from "../../../ChatList/Components/SVG/UserIconSvg";
import { screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";
import { useSelector } from "react-redux";

interface PhotoOrIconContainerProps {}

const PhotoOrIconContainer: React.FC<PhotoOrIconContainerProps> = () => {
  const selectedPhoto: string = useSelector((state: any) => {
    return state.chatListReducer.setPhotoForCreateGroupOrChannel
      .photoForCreateGroupOrChannel;
  });
  const radiusOfUserPhoto = screenWidth * 0.3;
  return (
    <View
      style={{
        width: radiusOfUserPhoto,
        aspectRatio: 1,
        backgroundColor: "#D9D9D9",
        overflow: "hidden",
        borderRadius: 100,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <View
        style={{
          // backgroundColor: "red",
          alignSelf: "center",
        }}
      >
        {selectedPhoto == "" ? (
          <UserIconSvg
            height={(radiusOfUserPhoto / 4) * 2.5}
            width={(radiusOfUserPhoto / 3.5) * 2.5}
            color={"#434343"}
          />
        ) : (
          <View>
            <Image
              source={{ uri: selectedPhoto }}
              style={{
                width: radiusOfUserPhoto,
                aspectRatio: 1,
                //position: "absolute",
                backgroundColor: "red",
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default PhotoOrIconContainer;