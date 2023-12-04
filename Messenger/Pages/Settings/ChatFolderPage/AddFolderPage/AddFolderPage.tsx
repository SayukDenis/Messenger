import React from "react";
import { View , ScrollView } from "react-native";
import AddFolderHeader from "./AddFolderHeadr/AddFolderHeader";
import AddFolderCenter from "./AddFolderCenter/AddFolderCenter";
import StyleAddFolderPage from "./StyleAddFolderPage";

const AddFolderPage : React.FC<any> = ({ navigation })=>{
    return <View style = {StyleAddFolderPage.mainconteiner}>
        <AddFolderHeader navigation = {navigation}/>
        <AddFolderCenter />
    </View>
}

export default AddFolderPage;