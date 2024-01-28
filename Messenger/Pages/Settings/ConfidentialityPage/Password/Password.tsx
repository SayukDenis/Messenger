import React from "react";
import { View } from "react-native";
import PasswordHeader from "./PasswordHeader/PasswoedHeader";
import PasswordCenter from "./PasswordCenter/PasswondCenter";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";

const PasswordPage : React.FC<any> = ({ navigation })=>{
    return (
<BackGroundGradientView>
    <HeaderContainer><PasswordHeader navigation ={navigation} ></PasswordHeader></HeaderContainer>
    <View style = {{marginTop:heightOfHeader}}></View>
    <PasswordCenter></PasswordCenter>
</BackGroundGradientView>
)
}

export default PasswordPage;