import React from "react";
import { View, Text,StatusBar } from "react-native";
import Header from "./Header/Header";
import Confidentialitycenter from "./Center/ConfidentialityCenter";
import StyleConf from "./StyleConfidentialityPage";

const ConfidentialityPage: React.FC<any> = ({ navigation })=> {
    return <View style={StyleConf.conteiner}  >
        <StatusBar hidden={true}/>
        <Header  navigation = {navigation}></Header>
        <Confidentialitycenter navigation = {navigation}></Confidentialitycenter>
    </View>
}

export default ConfidentialityPage;