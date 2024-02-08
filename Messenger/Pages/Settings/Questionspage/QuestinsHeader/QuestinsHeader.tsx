import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import StyleQuestionsHeader from "./StyleQuestiongsHeader";
import BackButton from "../../../SemiComponents/BackButton";

const QuestionsHeader: React.FC<any> = ({ navigation })=>{
    return (
        <View style = {StyleQuestionsHeader.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style = {StyleQuestionsHeader.backButt}>
                <BackButton/>
            </TouchableOpacity>
            <View style = {StyleQuestionsHeader.QuestionConteiner}>
                <Text style = {StyleQuestionsHeader.QuestionText}>Question in Telintik</Text>
            </View>
        </View>
    )
};

export default QuestionsHeader;