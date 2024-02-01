import React from "react";
import { View } from "react-native";
import LangugageHeader from "./LanguageHeaderPage/LanguageHeader";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import HeaderContainer from "../../SemiComponents/HeaderContainer";
import LangugageCenter from "./LanguageCenterPage/LangugageCenter";
import { heightOfHeader } from "../../ChatList/Constants/ConstantsForChatlist";

const LanguagePage : React.FC<any> = ({ navigation })=>{

    return (
        <BackGroundGradientView>
            <HeaderContainer><LangugageHeader navigation = {navigation}/></HeaderContainer>
            <View style = {{marginTop:heightOfHeader}}></View>
            <View style = {{marginTop:'3%'}}><LangugageCenter/></View>
        </BackGroundGradientView>
    ) 
}

export default LanguagePage;