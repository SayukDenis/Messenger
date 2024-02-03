import React from "react";
import { View } from "react-native";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";
import AddNewChatFolderHeader from "./AddNewChatToFolderHeader.tsx/AddnewChatToFolderHeader";
import AddNewChatToFolderCenter from "./AddNewChatToFolderCenter.tsx/AddNewChatToFolderCenter";

const AddNewChatToFolder  : React.FC<any> = ({ navigation , route })=>{
    return(
        <BackGroundGradientView>
            <HeaderContainer>
                <AddNewChatFolderHeader navigation = {navigation}/>
            </HeaderContainer>
            <View style = {{marginTop:heightOfHeader}}/>
            <AddNewChatToFolderCenter navigation = {navigation} route ={route}/>
        </BackGroundGradientView>
    )
}

export default AddNewChatToFolder;