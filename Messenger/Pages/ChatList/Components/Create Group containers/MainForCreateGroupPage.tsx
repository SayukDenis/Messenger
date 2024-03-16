import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import EditButton from "../../../SemiComponents/EditButton";
import { TouchableOpacity } from "react-native";

import { connect, useDispatch, useSelector } from "react-redux";
import User from "../../../../dao/Models/User";
import AddPhotoForCreate from "../CreateChannelAndGroupOrWriteMessage/Semi Components For creates/AddPhotoForCreate";
import TextAndInputForCreate from "../CreateChannelAndGroupOrWriteMessage/Semi Components For creates/TextAndInputForCreate";
import AddUsersListForCreate from "../CreateChannelAndGroupOrWriteMessage/Semi Components For creates/AddUsersListForCreate";
import GalleryModalWindowForUsage from "../CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/Gallery/GalleryModalWindowForUsage";
import { setIsVisibleGalleryModalWindow } from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";

interface MainForCreateGroupPageProps {
  navigation: any;
}

const MainForCreateGroupPage: React.FC<MainForCreateGroupPageProps> = ({
  navigation,
}) => {
  const [inputTextForName, setInputTextForName] = useState<string>("");
  const [inputTextForBio, setInputTextForBio] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const marginTop = 15;
  const marginLeft = screenWidth * 0.03;
  const marginBottom = 10;
  const selectedUsers: User[] = useSelector((state: any) => {
    return state.chatListReducer.createGroupOrChannel.selectedUsers;
  });

  const pressOnAddPhoto = () => {
    dispatch(setIsVisibleGalleryModalWindow(true));
  };

  return (
    <>
      <ScrollView scrollEnabled={isOpen} style={{ marginTop: heightOfHeader }}>
        <TouchableOpacity onPress={pressOnAddPhoto}>
          <AddPhotoForCreate />
        </TouchableOpacity>
        <TouchableOpacity onPress={pressOnAddPhoto}>
          <EditButton />
        </TouchableOpacity>
        <TextAndInputForCreate
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          inputText={inputTextForName}
          setInputText={setInputTextForName}
          maxNumberOfChars={43}
          changeTopic={"Name"}
          typeOfChat={"Group"}
        />
        <TextAndInputForCreate
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          inputText={inputTextForBio}
          setInputText={setInputTextForBio}
          maxNumberOfChars={100}
          changeTopic={"Bio"}
          typeOfChat={"Group"}
        />
        <AddUsersListForCreate
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          selectedUsers={selectedUsers}
          navigation={navigation}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          addNameOfUser={"Member"}
        />
      </ScrollView>
      <GalleryModalWindowForUsage
        navigation={navigation}
        cameFrom={"Create Group Page"}
      />
    </>
  );
};

export default connect(null)(MainForCreateGroupPage);
