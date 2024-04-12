import React from "react";
import { View } from "react-native";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";
import AddExeptionsHeader from "./AddExeptionsHeader/AddExeptionsHeader";
import AddExeptionsCenter from "./AddExeptionsCenter/AddExeptionsCenter";
import FooterForAddExeption from "./AddExeptionsFooter/AddExeptionFooter";

const AddExeptionsNotifiPage : React.FC<any> = ({ navigation , route })=>{
    const NameOFPage =route.params.NameOfPage
    return(
        <BackGroundGradientView>
            <HeaderContainer><AddExeptionsHeader navigation = {navigation}/></HeaderContainer>
            <View style = {{marginTop:heightOfHeader}}/>
            <AddExeptionsCenter navigation = {navigation} route = {route}/>
            <FooterForAddExeption nameOfPageText={NameOFPage}/>
        </BackGroundGradientView>
    )

}

export default AddExeptionsNotifiPage;