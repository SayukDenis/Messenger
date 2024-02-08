import React from "react";
import { View,TouchableOpacity, Text, Image } from "react-native";
import StyleUserInfoComponent from "./StyleUserInfoComponent";
import { IsVisibleUserInfo } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../../SemiComponents/BackButton";
import BackGroundColorForComponents from "../../../../SemiComponents/BackGroundColorForComponents";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

const UserInformationContainer = ()=>{
    const dispatch = useDispatch();
    return(
        <View>
            <View style = {StyleUserInfoComponent.containerUserAvatar}>
                <TouchableOpacity style = {StyleUserInfoComponent.backbuttonStyle} onPress={()=>dispatch(IsVisibleUserInfo())}>
                    <BackButton></BackButton>
                </TouchableOpacity>
                <Image style={StyleUserInfoComponent.avatarStyle} source={{uri:'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1'}}></Image>
                <BackGroundColorForComponents width={screenWidth} height={screenHeight*0.4}/>
            </View>
            
        </View>
    )
}

export default UserInformationContainer