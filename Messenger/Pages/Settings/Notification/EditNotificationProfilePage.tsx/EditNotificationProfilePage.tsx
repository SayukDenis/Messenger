import React from "react";
import { View } from "react-native";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";
import EditNotificationProfileHeader from "./EditNotificationProfileHeader/EditNotificationProfileHeader";
import EditNotificationProfileCenter from "./EditNotificationProfileCenter/EditNotificationProfileCenter";

const EditNotificationProfilePage : React.FC<any> = ({ navigation , route })=>{
    let profile = route.params;
    return(
        <BackGroundGradientView>
            <HeaderContainer>
                <EditNotificationProfileHeader navigation={navigation} route = {route}/>
            </HeaderContainer>
            <View style = {{marginTop:heightOfHeader}}></View>
            <EditNotificationProfileCenter navigation={navigation} route = {route}/>
        </BackGroundGradientView>
    )
}

export default EditNotificationProfilePage;