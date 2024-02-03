import React from "react";
import { View,TouchableOpacity, Text } from "react-native";
import StyleAddExeptionsHeader from "./StyleAddExeptionsHeader";
import BackButtonForAddExeptions from "./SvgComponent/BackButtonForAddExeptions";
import SearchButton from "./SvgComponent/SearchButton";
import { useDispatch } from "react-redux";
import { IsVisibleTextInput } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";

const AddExeptionsHeader : React.FC<any> = ({ navigation })=>{
    const dispatch = useDispatch();
    const SetVisible = ()=>{
        dispatch(IsVisibleTextInput());
        console.log("changed")
    }
    return(
        <View style = {StyleAddExeptionsHeader.container} >
            <TouchableOpacity onPress={()=>navigation.goBack()} style ={StyleAddExeptionsHeader.backButt}>
                <BackButtonForAddExeptions/>
            </TouchableOpacity>
            <View style = {StyleAddExeptionsHeader.ForwardArticleConteiner}>
                <Text style = {StyleAddExeptionsHeader.ForwardArticleText}>Forward</Text>
            </View>
            <TouchableOpacity onPress ={SetVisible} style = {StyleAddExeptionsHeader.searchButton}>
                <SearchButton/>
            </TouchableOpacity>
        </View>
    )
};

export default AddExeptionsHeader;