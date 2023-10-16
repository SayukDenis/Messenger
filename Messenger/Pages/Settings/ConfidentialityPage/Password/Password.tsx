import React from "react";
import { View } from "react-native";
import StylePassword from "./StylePassword";
import PasswordHeader from "./PasswordHeader/PasswoedHeader";
import PasswordCenter from "./PasswordCenter/PasswondCenter";

const PasswordPage = ()=>{
    return <>
    <PasswordHeader></PasswordHeader>
    <PasswordCenter></PasswordCenter>
    </>
}

export default PasswordPage;