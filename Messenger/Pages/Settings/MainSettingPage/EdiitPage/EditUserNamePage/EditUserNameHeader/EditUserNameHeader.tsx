import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import StyleEditUserNameHeader from "./StyleEditUserNameHeader";

const EditUsernameHeader: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleEditUserNameHeader.header}>
        <TouchableOpacity style={StyleEditUserNameHeader.backButt} onPress={()=> navigation.goBack()}><Text >back</Text></TouchableOpacity>
        <Text style={StyleEditUserNameHeader.UserName}>User name</Text>
        <TouchableOpacity style={StyleEditUserNameHeader.doneButton}><Text>Done</Text></TouchableOpacity>
    </View>
}

export default EditUsernameHeader;