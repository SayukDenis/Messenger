import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions } from "react-native";
import ContactsSvg from "../SVG/ContactsSvg";
import AddFolderSvg from "../SVG/AddFolderSvg";
import WriteMessageSvg from "../SVG/WriteMessageSvg";
import UserIconSvg from "../SVG/UserIconSvg";
import { connect, useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";
import { setBooleanForTouchOnHamburgerInHeaderChatList } from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";

const RightContainer = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const PressForDispatch = () => {
    setTimeout(()=>
    dispatch(
      setBooleanForTouchOnHamburgerInHeaderChatList(false)
    ),350)
  };
  const kefForSizeOfSvg: number = 0.073;
  const PressOnUserIcon = useRef(() => {
    navigation.navigate("NavigationForSettings");
    PressForDispatch()
  })
  const PressOnContactsIcon = useRef(() => {
    navigation.navigate("ContactsPage");
    PressForDispatch()
  });
  const PressaOnAddFolderIcon = useRef(() => {
    navigation.navigate("Chat folders");
    PressForDispatch()
  });
  const PressOnWriteMessage = useRef(() => {
    navigation.navigate("Create channel and group or write message");
    PressForDispatch()
  });
  return (
    <Animated.View
      style={[
        {
          width: screenWidth * 0.765,
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={PressOnContactsIcon.current}
          style={{ alignSelf: "center", marginLeft: screenWidth * 0 }}
        >
          <ContactsSvg
            width={screenWidth * kefForSizeOfSvg}
            height={screenHeight * kefForSizeOfSvg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "center", marginLeft: screenWidth * 0.05 }}
          onPress={PressaOnAddFolderIcon.current}
        >
          <AddFolderSvg
            width={screenWidth * kefForSizeOfSvg}
            height={screenHeight * kefForSizeOfSvg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={PressOnWriteMessage.current}
          style={{ alignSelf: "center", marginLeft: screenWidth * 0.05 }}
        >
          <WriteMessageSvg
            width={screenWidth * kefForSizeOfSvg}
            height={screenHeight * kefForSizeOfSvg}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={PressOnUserIcon.current}
        style={{
          alignSelf: "center",
        }}
      >
        <UserIconSvg
          width={screenWidth * kefForSizeOfSvg}
          height={screenHeight * kefForSizeOfSvg}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default connect(null)(RightContainer);
