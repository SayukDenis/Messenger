import User from "../../../../../dao/Models/User";
import React from "react";
import {
  screenHeight,
  screenWidth,
} from "../../../Constants/ConstantsForChatlist";
import { Image, Text } from "react-native";
import { View } from "react-native";
interface AddMemberContainerForUserProps {
  user: User;
}

const AddMemberContainerForUser: React.FC<AddMemberContainerForUserProps> = ({
  user,
}) => {
  const height = screenHeight * 0.06;
  const width = screenWidth;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          height,
          width,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: user.linkToPhoto }}
            style={{
              height: screenHeight * 0.05,
              alignSelf: "center",
              aspectRatio: 1,
              borderRadius: height,
              marginLeft: 10,
            }}
          />
          <Text style={{ alignSelf: "center", marginLeft: 10, fontSize: 14.5 }}>
            {user.name}
          </Text>
        </View>
        <View
          style={{
            height: screenHeight * 0.026,
            aspectRatio: 1,

            alignSelf: "center",
            marginRight: 10,
            borderRadius: height,
            borderWidth: 0.5,
            borderColor: "#AF95CF",
            overflow:"hidden"
          }}
        >
          <View
            style={{
              height: screenHeight * 0.026,
              aspectRatio: 1,
              position: "absolute",
              backgroundColor: "#FEE0A3",
              opacity: 0.5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: screenWidth,
          height: 2,
          opacity: 0.1,
          backgroundColor: "gray",
        }}
      />
    </>
  );
};

export default AddMemberContainerForUser;
