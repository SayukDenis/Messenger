import React from "react";
import { View , ScrollView } from "react-native";
import AddFolderHeader from "./AddFolderHeadr/AddFolderHeader";
import AddFolderCenter from "./AddFolderCenter/AddFolderCenter";
import StyleAddFolderPage from "./StyleAddFolderPage";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";

const AddFolderPage : React.FC<any> = ({ navigation })=>{
    return <BackGroundGradientView>
        <View style = {StyleAddFolderPage.mainconteiner}>
        <HeaderContainer><AddFolderHeader navigation = {navigation}/></HeaderContainer>
        <View style = {{marginTop:heightOfHeader}}></View>
        <AddFolderCenter />
    </View>
    </BackGroundGradientView>
}

export default AddFolderPage;