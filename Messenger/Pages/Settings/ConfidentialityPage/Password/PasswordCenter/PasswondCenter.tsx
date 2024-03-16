import React, {useState} from "react";
import { View ,TouchableOpacity } from "react-native";
import SwitchButtonContainer from "../../../Notification/MainNotifivationPage/NotificationCenter/SwitchButtonContainer/SwitchButtonContainer";
import ButtonForSettings from "../../../../SemiComponents/ButtonForSettings";

const PasswordCenter =()=>{
    return(
        <View>
            <TouchableOpacity style = {{marginBottom:1, marginTop:"5%"}}>
                <SwitchButtonContainer  text="On lock code" switchState={true}/>
            </TouchableOpacity>
            <TouchableOpacity style = {{marginBottom:1}}>
                <ButtonForSettings text="Edit lock code"/>
            </TouchableOpacity>
            <TouchableOpacity style = {{marginBottom:1}}>
                <SwitchButtonContainer text="Unlock to Face or Touch id" switchState={true}/> 
            </TouchableOpacity>
        </View>
    )
}

export default PasswordCenter;