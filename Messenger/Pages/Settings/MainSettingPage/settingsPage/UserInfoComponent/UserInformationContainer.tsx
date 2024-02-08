import React from "react";
import { View,TouchableOpacity, Text, Image } from "react-native";
import StyleUserInfoComponent from "./StyleUserInfoComponent";
import { IsVisibleUserInfo } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../../SemiComponents/BackButton";
import BackGroundColorForComponents from "../../../../SemiComponents/BackGroundColorForComponents";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

interface infoUser{
    nameOfColumn: string,
    contentOfColumn:string
}

const UserInfoComponent = ()=>{
    let numbOfphone:string ="123123123123";
    let tag :string = "@aqweqwe";
    let userName:string = "alese";
    let Bio :string= "werwerwerwerwerwer"
    let nameOFcolums :infoUser[]= [{nameOfColumn:"Numb:", contentOfColumn:numbOfphone},
    {nameOfColumn:"Teg@  ", contentOfColumn:tag},{nameOfColumn:"Username:", contentOfColumn:userName},
    {nameOfColumn:"Bio:", contentOfColumn:Bio}]
    const dispatch = useDispatch();
    return(
        <View> 
           <View style = {StyleUserInfoComponent.containerUserInfo}>
            {nameOFcolums.map((item, index) => (
                    <View key={index} >
                        <View style = {StyleUserInfoComponent.horizontalWhiteLine}/>
                        <View style = {StyleUserInfoComponent.informaitionContainer}>
                            <Text>{item.nameOfColumn}</Text>
                            <View style ={StyleUserInfoComponent.verticalWhiteLine}/>
                            <Text>{item.contentOfColumn}</Text>
                        </View>
                    </View>
            ))}
                <View style = {StyleUserInfoComponent.horizontalWhiteLine}/>
            </View>
        </View>
    )
}

export default UserInfoComponent