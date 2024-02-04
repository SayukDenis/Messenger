import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import StyleEditNotificationHeder from "./StyleEditNotificationHeader";
import BackButton from "../../../../SemiComponents/BackButton";

const EditNotificationHeader: React.FC<any> = ({ navigation, route })=>{
    const NameOfPage = route.params.NameOfPage;
    return (
        <View style = {StyleEditNotificationHeder.container}>
            <TouchableOpacity style = {StyleEditNotificationHeder.backButt} onPress={()=> navigation.goBack()}>
                <BackButton/>
            </TouchableOpacity>
            <View style = {StyleEditNotificationHeder.EditNorifiConteiner}>
                <Text style = {StyleEditNotificationHeder.EditNorifiText}>{NameOfPage}</Text>
            </View>
        </View>
    )
}

export default EditNotificationHeader