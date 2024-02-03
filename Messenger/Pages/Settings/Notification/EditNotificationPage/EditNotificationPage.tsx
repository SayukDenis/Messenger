import React from "react";
import { View } from "react-native";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";
import EditNotificationHeader from "./EditNotificatioHeader/EditNotificationHeader";
import EditNotificationCenter from "./EditNotificationCenter/EditNotificationCenter";

const EditNotificationPage: React.FC<any> = ({ navigation , route})=>{
    return(
        <BackGroundGradientView>
            <HeaderContainer><EditNotificationHeader navigation = {navigation} route = {route}  /></HeaderContainer>
            <View style = {{marginTop:heightOfHeader}}></View>
            <EditNotificationCenter navigation = {navigation}  route = {route} />
        </BackGroundGradientView>
    )
}

export default EditNotificationPage;