import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import StyleQuestionsHeader from "./StyleQuestiongsHeader";

const QuestionsHeader = ()=>{
    return <View style ={StyleQuestionsHeader.header}>
        <TouchableOpacity style ={StyleQuestionsHeader.backButt}><Text>but</Text></TouchableOpacity>
    <View style ={StyleQuestionsHeader.conteinterUserName}><Text style={StyleQuestionsHeader.styleText}>Question in Telentik</Text></View>
    </View>
};

export default QuestionsHeader;