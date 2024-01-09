import React from "react";
import BackGroundGradientView from "../../../../SemiComponents/BackGroundGradientView";
import HeaderForAddMember from "./HeaderForAddMember";
import MainForAddMemberPage from "./MainForAddMemberPage";

interface AddMemberPageProps {
  navigation: any;
}

const AddMemberPage: React.FC<AddMemberPageProps> = ({ navigation }) => {
   /* useSelector((state:any)=>{
        const props=state.chatListReducer.createGroupOrChannel
        console.log(props)
    })*/
    
  return (
    <BackGroundGradientView>
      <HeaderForAddMember navigation={navigation} />
      <MainForAddMemberPage/>
    </BackGroundGradientView>
  );
};

export default AddMemberPage;
