import React, { useEffect, useState } from "react";
import BackGroundGradientView from "../../../../SemiComponents/BackGroundGradientView";
import HeaderForAddMember from "./HeaderForAddMember";
import MainForAddMemberPage from "./MainForAddMemberPage";
import User from "../../../../../dao/Models/User";
import { useSelector } from "react-redux";

interface AddMemberPageProps {
  navigation: any;
}

const AddMemberPage: React.FC<AddMemberPageProps> = ({ navigation }) => {
    const [selectedUsers,setSelectedUsers]=useState<User[]>([])
    const selectedUsersPrev: User[] = useSelector((state: any) => {
      return state.chatListReducer.createGroupOrChannel.selectedUsers;
    });
    useEffect(()=>{
      setSelectedUsers(selectedUsersPrev)
    },[])
  return (
    <BackGroundGradientView>
      <HeaderForAddMember navigation={navigation} selectedUsers={selectedUsers}/>
      <MainForAddMemberPage selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
    </BackGroundGradientView>
  );
};

export default AddMemberPage;
