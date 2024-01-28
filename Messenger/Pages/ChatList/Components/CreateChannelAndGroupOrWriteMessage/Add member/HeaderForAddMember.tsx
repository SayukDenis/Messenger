import React, { useEffect, useRef } from "react";
import HeaderContainer from "../../../../SemiComponents/HeaderContainer";
import DefaultContainerInHeader from "../../../../SemiComponents/DefaultContainerInHeader";
import { Text, TouchableOpacity } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../../Constants/ConstantsForChatlist";
import BackButton from "../../../../SemiComponents/BackButton";
import { View } from "react-native";
import { TextInput } from "react-native";
import User from "../../../../../dao/Models/User";
import { useDispatch } from "react-redux";
import { addUserForCreateGroupOrChannel } from "../../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";

interface HeaderForAddMemberProps {
  navigation: any;
  selectedUsers:User[];

}

const HeaderForAddMember: React.FC<HeaderForAddMemberProps> = ({
  navigation,
  selectedUsers
}) => {
  const inputRef = useRef<TextInput>(null);
  const dispatch=useDispatch()
  const pressOnBackButton = useRef(() => {
    navigation.goBack();
  });
  useEffect(()=>{
    /*selectedUsers.map((user:User)=>{
      console.log(user.name)
    })*/
  },[selectedUsers])
  const pressOnDoneButton = () => {
    dispatch(addUserForCreateGroupOrChannel(selectedUsers))
    navigation.goBack()
    
  };
  return (
    <HeaderContainer>
      <DefaultContainerInHeader>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={pressOnBackButton.current}
            style={{ alignSelf: "center", width: screenWidth * 0.1 }}
          >
            <BackButton />
          </TouchableOpacity>
          <View
            style={{
              alignSelf: "center",
              marginLeft: 8,
              marginRight: screenWidth * 0.04,
            }}
          >
            <TextInput
              ref={inputRef}
              style={{
                width: screenWidth * 0.65,
                height: screenHeight * 0.0415,
                backgroundColor: "#272727",
                alignSelf: "center",
                color: "white",
                paddingHorizontal: 15,
                borderRadius: 100,
                fontSize: 16,
              }}
              placeholder="Search members"
              placeholderTextColor={"#888282"}
              keyboardAppearance="dark"
            />
          </View>
          <TouchableOpacity onPress={pressOnDoneButton}
            style={{ alignSelf: "center", width: screenWidth * 0.15 }}
          >
            <Text
              style={{
                alignSelf: "flex-end",
                fontSize: 18,
                paddingRight: 15,
                color: "#734CA5",
              }}
            >
              {"Done"}
            </Text>
          </TouchableOpacity>
        </View>
      </DefaultContainerInHeader>
    </HeaderContainer>
  );
};

export default HeaderForAddMember;
