import React from "react";
import { View } from "react-native";
import StylePassword from "./StylePassword";
import PasswordHeader from "./PasswordHeader/PasswoedHeader";
import PasswordCenter from "./PasswordCenter/PasswondCenter";

const PasswordPage : React.FC<any> = ({ navigation })=>{
    return <View style={StylePassword.passwordConteiner}>
    <PasswordHeader navigation ={navigation} ></PasswordHeader>
    <PasswordCenter></PasswordCenter>
    </View>
}

export default PasswordPage;