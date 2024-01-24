import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  heightOfHeader,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import EditButton from "../../../SemiComponents/EditButton";
import { TouchableOpacity } from "react-native";
import AddPhotoForCreate from "../CreateChannelAndGroupOrWriteMessage/Semi Components For creates/AddPhotoForCreate";
import TextAndInputForCreate from "../CreateChannelAndGroupOrWriteMessage/Semi Components For creates/TextAndInputForCreate";
import AddUsersListForCreate from "../CreateChannelAndGroupOrWriteMessage/Semi Components For creates/AddUsersListForCreate";
import User from "../../../../dao/Models/User";
import { useSelector } from "react-redux";
import BlurAll from "../../../SemiComponents/BlurAll";
import GalleryModalWindow from "../CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/GalleryModalWindow";

interface MainForCreateChannelPageProps {
  navigation: any;
}

const MainForCreateChannelPage: React.FC<MainForCreateChannelPageProps> = ({
  navigation,
}) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const marginTop = 15;
  const marginLeft = screenWidth * 0.03;
  const marginBottom = 10;
  const [inputTextForName, setInputTextForName] = useState<string>("");
  const [inputTextForBio, setInputTextForBio] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [onAddPhotoPress, setOnAddPhotoPress] = useState<boolean>(false);
  const selectedUsers: User[] = useSelector((state: any) => {
    return state.chatListReducer.createGroupOrChannel.selectedUsers;
  });
  
 
  const handlePress = () => {
    setStartTime(Date.now());
  };

  function handlePressOut() {
    setEndTime(Date.now());
    const duration = startTime - endTime;
    if (duration < 16) {
      setOnAddPhotoPress(false);
      return;
    }
    setStartTime(Date.now());
  }
  const pressOnAddPhoto = () => {
    setOnAddPhotoPress(true);
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
          typeOfChat={"Channel"}
        />
        <TextAndInputForCreate
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          inputText={inputTextForBio}
          setInputText={setInputTextForBio}
          maxNumberOfChars={100}
          changeTopic={"Bio"}
          typeOfChat={"Channel"}
        />
        <AddUsersListForCreate
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          selectedUsers={selectedUsers}
          navigation={navigation}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          addNameOfUser={"User"}
        />
      </ScrollView>
      {onAddPhotoPress ? (
        <BlurAll handlePress={handlePress} handlePressOut={handlePressOut}>
          <GalleryModalWindow setOnAddPhotoPress={setOnAddPhotoPress} navigation={navigation} />
        </BlurAll>
      ) : null}
    </>
  );
};

export default MainForCreateChannelPage;
