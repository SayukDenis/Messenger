import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import BackButton from "../../../../SemiComponents/BackButton";
import StyleNotificationHeader from "./StyleNotificationHeader";

const NotificationHeader: React.FC<any> = ({ navigation })=>{
    return <View style = {StyleNotificationHeader.container}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style ={StyleNotificationHeader.backButt}><BackButton></BackButton></TouchableOpacity>
        <View style ={StyleNotificationHeader.NotificatiomArticleConteiner}><Text style = {StyleNotificationHeader.NotificatiomArticleText}>Notification</Text></View>
    </View>
}

export default NotificationHeader;