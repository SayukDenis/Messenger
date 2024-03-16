import React from "react";
import { View, Text,StatusBar } from "react-native";
import Header from "./Header/Header";
import Confidentialitycenter from "./Center/ConfidentialityCenter";
import StyleConf from "./StyleConfidentialityPage";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";

const ConfidentialityPage: React.FC<any> = ({ navigation })=> {
    return <BackGroundGradientView>
        <View style={StyleConf.conteiner}>
        <View style = {{marginTop:heightOfHeader}}></View>
        <HeaderContainer><Header  navigation = {navigation}></Header></HeaderContainer>
        <Confidentialitycenter navigation = {navigation}></Confidentialitycenter>
    </View>
    </BackGroundGradientView>
}

export default ConfidentialityPage;