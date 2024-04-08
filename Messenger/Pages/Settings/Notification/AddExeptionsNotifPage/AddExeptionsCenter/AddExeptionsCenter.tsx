import React, {useEffect, useState} from "react";
import { View ,ScrollView, Text, Image, TouchableOpacity, TextInput} from "react-native";
import BackGroundColorForComponents from "../../../../SemiComponents/BackGroundColorForComponents";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import StyleAddExeptionsCenter from "./StyleAddExeptionsCenter";
import { useDispatch, useSelector } from "react-redux";
import { SetFalseStateForIsVisible } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { AddNotifiExeptionsForPrivateChats } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { RemoveUserAfterAdd } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { AddNotifiExeptionsForGroupsChats } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { RemoveGroupAfterAdd } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { AddNotifiExeptionsForChannels } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { RemoveChannelAfterAdd } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";

interface ListNotificationEXeptions{ 
    name: string,
    link: string
}

const AddExeptionsCenter: React.FC<any> = ({ navigation , route })=>{

    const NameOFPage =route.params.NameOfPage;
    console.log(NameOFPage)
    let ListToaddToExeptions : ListNotificationEXeptions[];
    if(NameOFPage == "Privates Chats"){
        ListToaddToExeptions=useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.contacts)
    }else if(NameOFPage == "Group chats"){
        ListToaddToExeptions=useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.groups)
    }else {
        ListToaddToExeptions =useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.channelNames);
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(SetFalseStateForIsVisible(false));
    },[])
    
    const AddExptionsFunc = (userName:string , linkOnPhoto: string)=>{
        if(NameOFPage == "Privates Chats"){
            dispatch(AddNotifiExeptionsForPrivateChats(userName,linkOnPhoto));
            dispatch(RemoveUserAfterAdd(userName))
            navigation.goBack();
        }else if(NameOFPage == "Group chats"){
            dispatch(AddNotifiExeptionsForGroupsChats(userName,linkOnPhoto));
            dispatch(RemoveGroupAfterAdd(userName))
            navigation.goBack();
        }else{
            dispatch(AddNotifiExeptionsForChannels(userName,linkOnPhoto));
            dispatch(RemoveChannelAfterAdd(userName)) 
            navigation.goBack();
        }
    }

    let isVisible =useSelector((state:any)=>state.SettingsPagesReducers.SetVisibleTextInput.Visible)
    return(
        <ScrollView style = {{marginTop:"1%"}}>
            {isVisible && (
                <View style = {StyleAddExeptionsCenter.InputTextContainer}>
                    <TextInput style = {StyleAddExeptionsCenter.StyleInputText} placeholder="Search in chat" placeholderTextColor="#888282"/>
                </View>
            )}
            {ListToaddToExeptions.map((el, index) => (
                <TouchableOpacity onPress={()=>AddExptionsFunc(el.name, el.link)} style = {StyleAddExeptionsCenter.buttonContainer}>
                    <View style = {StyleAddExeptionsCenter.usersInfocontainer}>
                        <Image style={StyleAddExeptionsCenter.usersAvatarStyle}  source={{uri:el.link}}></Image>
                        <Text style = {StyleAddExeptionsCenter.usersNameTextStyle} key = {index} >{el.name}</Text>
                    </View>
                    <BackGroundColorForComponents width={screenWidth} height={screenHeight*0.06}/>
                </TouchableOpacity>
            ))}
            <View style = {{height:screenHeight*0.09}}/>
        </ScrollView>
    )
}

export default AddExeptionsCenter;