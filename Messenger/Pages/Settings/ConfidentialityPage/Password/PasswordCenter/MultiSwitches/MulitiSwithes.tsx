import React,{useState} from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import StylePassCentre from "./StylePasswordCenter";

const MultipleSwitches = () => {

    return<View style={StylePassCentre.passConteiner}>
    <TouchableOpacity style={StylePassCentre.funcOn} ><Text style={StylePassCentre.styleText}  >Off lock code</Text>
    </TouchableOpacity>
    <TouchableOpacity style={StylePassCentre.funcOFF} ><Text style={StylePassCentre.styleText} >Edit lock code</Text>
    </TouchableOpacity>
    <TouchableOpacity style={StylePassCentre.funcOFF} ><Text style={StylePassCentre.styleText} >Unlock to Face or Touch id</Text>
    </TouchableOpacity>
</View>
}

export default MultipleSwitches;