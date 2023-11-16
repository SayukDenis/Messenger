import React from "react";
import { View, Text } from "react-native";
import StyleEditUsernamePage from "./StyleEditUser";
import EditUsernameHeader from "./EditUserNameHeader/EditUserNameHeader";
import EditUserNameCenter from "./EditUserNameCenter/EditUserNameCenter";

const EditUsernamePage : React.FC<any> = ({ navigation })=>{
    return <View style ={StyleEditUsernamePage.mainConteiner}>
    <EditUsernameHeader navigation ={navigation}/>
    <EditUserNameCenter/>
    </View>
}

export default EditUsernamePage;