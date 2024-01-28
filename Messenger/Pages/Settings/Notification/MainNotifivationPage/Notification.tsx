import React from "react";
import { View } from "react-native";
import StyleNotification from "./StyleNotification";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import NotificationHeader from "./NotificationHeader/NotificationHeader";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import NotificationCenter from "./NotificationCenter/NorificationCenter";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";

const Notification: React.FC<any> = ({ navigation })=>{
    return <BackGroundGradientView>
        <HeaderContainer><NotificationHeader navigation = {navigation}></NotificationHeader></HeaderContainer>
        <View style = {{marginTop:heightOfHeader}}></View>
        <NotificationCenter></NotificationCenter>
    </BackGroundGradientView>
}

export default Notification