import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import StyleBlockUserHeader from "./StyleBlockUser";
import BackButton from "../../../../SemiComponents/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { SetVisibleForRadioButtons } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { UnblockBlockedUser } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";

const BlocUserHeader: React.FC<any> = ({ navigation })=> {

    const dispatch = useDispatch();
    const IsVisible = useSelector((state :any) => state.SettingsPagesReducers.RadioButtons.VisibleOfRadioButtons);
    const SetVisible = ()=>{
        dispatch(SetVisibleForRadioButtons());
    }

    const DonePress = ()=>{
        dispatch(SetVisibleForRadioButtons());
        dispatch(UnblockBlockedUser());
    }

    return(
        <View style = {StyleBlockUserHeader.container} >
            <TouchableOpacity style ={StyleBlockUserHeader.backButt} onPress={() => navigation.goBack()}>
                <BackButton/>
            </TouchableOpacity>
            <View style ={StyleBlockUserHeader.BlockUserArticleConteiner}>
                <Text style={StyleBlockUserHeader.BlockUserArticleText}>Blocked users</Text>
            </View>
            {IsVisible == false ? (
                <TouchableOpacity style = {StyleBlockUserHeader.UnblockButt} onPress={SetVisible}>
                    <Text>Unblock</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style = {StyleBlockUserHeader.UnblockButt} onPress={DonePress}>
                    <Text>Done</Text>
                </TouchableOpacity>
            )}   
        </View>  
    )
}

export default BlocUserHeader;