import React from "react";
import { View, TouchableOpacity } from "react-native";
import StyleLangugageCenter from "./StyleLangugageCenter";
import ContainterForLangugageButt from "./ContainerForLangugageBut/ContainterForLangugage";

const LangugageCenter = () =>{
    return(
        <View>
            <TouchableOpacity style = {{marginBottom:1}}><ContainterForLangugageButt text="English"/></TouchableOpacity>
        </View>
    )
}

export default LangugageCenter