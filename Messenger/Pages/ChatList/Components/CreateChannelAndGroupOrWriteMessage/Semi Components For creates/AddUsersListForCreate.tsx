import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../../Constants/ConstantsForChatlist";
import User from "../../../../../dao/Models/User";
import AddMembersForMoreThanZeroSelected from "../../Create Group containers/AddMembersForMoreThanZeroSelected";
import AddMembersForZeroSelected from "../../Create Group containers/AddMembersForZeroSelected";
import ContainerOfSelectedMembers from "../../Create Group containers/ContainerOfSelectedMembers";
import TheFooterIfMoreThan3SelectedMembers from "../../Create Group containers/TheFooterIfMoreThan3SelectedMembers";

interface AddUsersListForCreateProps {
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  selectedUsers: User[];
  navigation: any;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  addNameOfUser: string;
}

const AddUsersListForCreate: React.FC<AddUsersListForCreateProps> = ({
  marginBottom,
  marginLeft,
  marginTop,
  selectedUsers,
  navigation,
  setIsOpen,
  isOpen,
  addNameOfUser,
}) => {
  const PressOnAddMembers = useRef(() => {
    navigation.navigate("Add Member Page");
  });
  const onFooterArrowForListOfMembersTouch = useRef(() => {
    setIsOpen((prev) => !prev);
  });
  const displayNumberOfContainers = (selectedUsersLength: number): number => {
    let numberToDisplay: number = selectedUsersLength;
    if (isOpen) {
      return selectedUsersLength;
    } else if (!isOpen) {
      return 3;
    }
    return numberToDisplay;
  };
  useEffect(() => {
    setIsOpen(false);
  }, [selectedUsers.length <= 3]);
  return (
    <>
      <Text
        style={{
          marginTop,
          marginLeft,
          color: "#2B1D1D",
          fontSize: 17,
          marginBottom,
        }}
      >
        {`${addNameOfUser}s`}
      </Text>
      <View style={{ marginBottom: 2 }}>
        {selectedUsers.length > 0 ? (
          <AddMembersForMoreThanZeroSelected
            onMemberTouch={PressOnAddMembers}
            addNameOfUser={addNameOfUser}
          />
        ) : (
          <AddMembersForZeroSelected
            marginLeft={marginLeft}
            addNameOfUser={addNameOfUser}
            onMemberTouch={PressOnAddMembers}
          />
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
    </>
  );
};

export default AddUsersListForCreate;
