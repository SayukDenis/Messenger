import React, { MutableRefObject } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import AddMemberSVG from "../../../SemiComponents/AddMemberSVG";
import BackGroundColorForComponents from "../../../SemiComponents/BackGroundColorForComponents";
import DeleteSvg from "../SVG/Delete";
import { useDispatch } from "react-redux";
import { addUserForCreateGroupOrChannel } from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";

interface AddMembersForMoreThanZeroSelectedProps {
  onMemberTouch: MutableRefObject<() => void>;
  addNameOfUser: string;
}
const AddMembersForMoreThanZeroSelected: React.FC<
  AddMembersForMoreThanZeroSelectedProps
> = ({ onMemberTouch,addNameOfUser }) => {
  const height = screenHeight * 0.035;
  const width = screenWidth * 0.92;
  const topBorderRadius = 20;
  const bottomBorderRadius = 2;
  const opacity = 1;
  const dispatch = useDispatch();
  const containerStyle = StyleSheet.create({
    container: {
      flexDirection: "row",
      // backgroundColor: "red",
      paddingHorizontal: 10,
      overflow: "hidden",
      borderTopRightRadius: topBorderRadius,
      borderTopLeftRadius: topBorderRadius,
      borderBottomLeftRadius: bottomBorderRadius,
      borderBottomRightRadius: bottomBorderRadius,
    },
  });
  const DeleteAllSelectedUsers=()=>{
    dispatch(addUserForCreateGroupOrChannel([]));
  }
  return (
    <View
      style={{
        //backgroundColor: "white",
        height,
        width,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={onMemberTouch.current}
        style={containerStyle.container}
      >
        <View
          style={{
            //backgroundColor: "white",
            alignSelf: "center",
            justifyContent: "center",

            opacity,
          }}
        >
          <AddMemberSVG kef={0.8} />
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 14,
            padding: 3,
            opacity,
            //backgroundColor: "red",
          }}
        >
          {addNameOfUser}
        </Text>
        <BackGroundColorForComponents height={height} width={width / 2} />
      </TouchableOpacity>
      <TouchableOpacity style={containerStyle.container} onPress={DeleteAllSelectedUsers}>
        <View style={{ opacity }}>
          <DeleteSvg height={height} width={width * 0.035} color="#CE2500" />
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: "#CE2500",
            fontSize: 14,
            paddingLeft: 3,
            opacity,
          }}
        >
          {`All ${addNameOfUser}s`}
        </Text>
        <BackGroundColorForComponents height={height} width={width / 2} />
      </TouchableOpacity>
    </View>
  );
};
export default AddMembersForMoreThanZeroSelected;
