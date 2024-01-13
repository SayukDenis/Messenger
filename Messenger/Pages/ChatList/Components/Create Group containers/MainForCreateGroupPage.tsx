import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import EditButton from "../../../SemiComponents/EditButton";
import { TouchableOpacity } from "react-native";
import ContainerForButtonForSettings from "../../../SemiComponents/ContainerForButtonForSettings";
import TextInputValidateForCountOfText from "../../../SemiComponents/TextInputValidateForCountOfText";
import AddMemberSVG from "../../../SemiComponents/AddMemberSVG";
import CameraSVG from "../../../SemiComponents/CameraSVG";
import { connect, useDispatch, useSelector } from "react-redux";
import User from "../../../../dao/Models/User";
import ContainerOfSelectedMembers from "./ContainerOfSelectedMembers";
import TheFooterIfMoreThan3SelectedMembers from "./TheFooterIfMoreThan3SelectedMembers";
import AddMembersForZeroSelected from "./AddMembersForZeroSelected";
import AddMembersForMoreThanZeroSelected from "./AddMembersForMoreThanZeroSelected";

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
  const radiusOfPhotoContiner = screenWidth * 0.33;
  const marginTop = 15;
  const marginLeft = screenWidth * 0.03;
  const marginBottom = 10;
  const PressOnAddMembers = useRef(() => {
    navigation.navigate("Add Member Page");
  });
  const selectedUsers: User[] = useSelector((state: any) => {
    return state.chatListReducer.createGroupOrChannel.selectedUsers;
  });
  const onFooterArrowForListOfMembersTouch = useRef(() => {
    setIsOpen((prev) => !prev);
  });
  useEffect(() => {
    selectedUsers.map((user: User, index: number) => {
      console.log(user.name);
    });
  }, [selectedUsers]);
  useEffect(() => {
    setIsOpen(false);
  }, [selectedUsers.length <= 3]);
  const displayNumberOfContainers = (selectedUsersLength: number): number => {
    let numberToDisplay: number = selectedUsersLength;
    if (isOpen) {
      return selectedUsersLength;
    } else if (!isOpen) {
      return 3;
    }
    return numberToDisplay;
  };
  return (
    <ScrollView scrollEnabled={isOpen} style={{ marginTop: heightOfHeader }}>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "#E3CFB1",
          borderRadius: 100,
          height: radiusOfPhotoContiner,
          aspectRatio: 1,
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <CameraSVG />
        </View>
      </View>
      <TouchableOpacity>
        <EditButton />
      </TouchableOpacity>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Name"}
        </Text>
      </View>
      <ContainerForButtonForSettings>
        <TextInputValidateForCountOfText
          placeHolder={"Group name"}
          maxNumberOfChars={43}
          inputText={inputTextForName}
          setInputText={setInputTextForName}
        />
      </ContainerForButtonForSettings>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Bio"}
        </Text>
      </View>
      <ContainerForButtonForSettings>
        <TextInputValidateForCountOfText
          placeHolder={"Group bio"}
          maxNumberOfChars={100}
          inputText={inputTextForBio}
          setInputText={setInputTextForBio}
        />
      </ContainerForButtonForSettings>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Members"}
        </Text>
      </View>
      <View style={{marginBottom:2}}>
        {selectedUsers.length > 0 ? (
          <AddMembersForMoreThanZeroSelected onMemberTouch={PressOnAddMembers}/>
        ) : (
          <AddMembersForZeroSelected marginLeft={marginLeft} onMemberTouch={PressOnAddMembers}/>
        )}
      </View>
      {selectedUsers
        .slice(0, displayNumberOfContainers(selectedUsers.length))
        .map((user: User, index: number) => (
          <ContainerOfSelectedMembers user={user} key={index} />
        ))}
      {selectedUsers.length > 3 && (
        <TouchableOpacity
          onPress={onFooterArrowForListOfMembersTouch.current}
          activeOpacity={0.8}
        >
          <TheFooterIfMoreThan3SelectedMembers isOpen={isOpen} />
        </TouchableOpacity>
      )}
      <View style={{ height: screenHeight * 0.05, width: screenWidth }} />
    </ScrollView>
  );
};

export default connect(null)(MainForCreateGroupPage);
