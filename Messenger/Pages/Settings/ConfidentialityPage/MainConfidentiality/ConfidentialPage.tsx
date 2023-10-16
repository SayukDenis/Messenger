import React from "react";
import { View, Text,StatusBar } from "react-native";
import Header from "./Header/Header";
import Confidentialitycenter from "./Center/ConfidentialityCenter";

const ConfidentialityPage = () => {
    return <View>
        <StatusBar hidden={true}/>
        <Header></Header>
        <Confidentialitycenter></Confidentialitycenter>
    </View>
}

export default ConfidentialityPage;