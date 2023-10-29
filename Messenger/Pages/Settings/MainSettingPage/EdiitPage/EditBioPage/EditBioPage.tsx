import React from "react";
import { View } from "react-native";
import StylesEditBio from "./StyleEditBio";
import EditBioPageHeader from "./EditBioPageHeader/EditBioPageHeader";
import EditBioCenter from "./EditBiopageCenter/EditBioPageCenter";

const EditBioPage: React.FC<any> = ({ navigation })=>{
    return <View style ={StylesEditBio.container}>
        <EditBioPageHeader navigation ={navigation}></EditBioPageHeader>
        <EditBioCenter></EditBioCenter>
    </View>
}

export default EditBioPage;