import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StyleEditNotificationProfileHeader from "./StyleEditNotificationFrofileHeader";
import BackButton from "../../../../SemiComponents/BackButton";

const EditNotificationProfileHeader : React.FC<any> = ({navigation, route}) =>{
    let profileName = route.params.ProfileName;
    return(
        <View style ={StyleEditNotificationProfileHeader.container}>
            <TouchableOpacity style={StyleEditNotificationProfileHeader.backButt} onPress={()=>{navigation.goBack();}}>
                <BackButton/>
            </TouchableOpacity>
            <View style={StyleEditNotificationProfileHeader.ProfileNameConteiner}>
                <Text style ={StyleEditNotificationProfileHeader.ProfileName}>{profileName}</Text>
            </View>
            <TouchableOpacity onPress={()=>{navigation.goBack();}} style ={StyleEditNotificationProfileHeader.DoneButt}>
                <Text style={StyleEditNotificationProfileHeader.StyleDoneButtonText}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditNotificationProfileHeader;