import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  heightOfHeader,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import ButtonForSettings from "../../../SemiComponents/ButtonForSettings";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  addUserForCreateGroupOrChannel,
  setIsVisibleGalleryModalWindow,
  setPhotoForCreateGroupOrChannel,
} from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
interface MainForCreateChannelAngGroupOrWriteMessageProps {
  navigation: any;
}

const MainForCreateChannelAngGroupOrWriteMessage: React.FC<
  MainForCreateChannelAngGroupOrWriteMessageProps
> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const marginTop = 15;
  const marginLeft = screenWidth * 0.03;
  const dispatch = useDispatch();
  const PressOnCreateGroup = useRef(() => {
    navigation.navigate("Create Group Page");
  });
  const PressOnCreateChannel = useRef(() => {
    navigation.navigate("Create Channel Page");
  });
  const PressOnWriteMessage = useRef(() => {
    navigation.navigate("Write Message Page");
  });
  useEffect(() => {
    if (isFocused) {
      dispatch(setPhotoForCreateGroupOrChannel(""));
      dispatch(setIsVisibleGalleryModalWindow(false));
      dispatch(addUserForCreateGroupOrChannel([]));
    }
  }, [isFocused]);
  return (
    <View style={{ marginTop: heightOfHeader + marginTop }}>
      <Text style={{ fontSize: 17, marginLeft, marginBottom: 10 }}>
        {"Create group/channel"}
      </Text>
      <TouchableOpacity
        style={{ marginBottom: 2 }}
        onPress={PressOnCreateChannel.current}
      >
        <ButtonForSettings text="Create channel" />
      </TouchableOpacity>
      <TouchableOpacity onPress={PressOnCreateGroup.current}>
        <ButtonForSettings text="Create group" />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginLeft, marginBottom: 10, marginTop }}>
        {"Message"}
      </Text>
      <TouchableOpacity onPress={PressOnWriteMessage.current}>
        <ButtonForSettings text="Write message" />
      </TouchableOpacity>
    </View>
  );
};

export default MainForCreateChannelAngGroupOrWriteMessage;
