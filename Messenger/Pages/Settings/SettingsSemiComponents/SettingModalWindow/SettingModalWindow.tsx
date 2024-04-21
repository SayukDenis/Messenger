import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import StyleSettingModalWindow from "./StyleSettingModalWindow";

interface SettingModalWindowProps{
    isModalVisible: boolean,
    toggleModal: () => void;
    AgreeButtonfunc: () => void;
    DisgreeButtonfunc: () => void,
}

const SettingModalWindow : React.FC<SettingModalWindowProps>=({isModalVisible,toggleModal,AgreeButtonfunc,DisgreeButtonfunc})=>{
    return(
        <Modal 
             animationType="none"
             transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}> 
            <View style = {StyleSettingModalWindow.SettingModalWindowContainer}>
                <View style = {StyleSettingModalWindow.SettingModalWindowWindow}>
                    <View style = {StyleSettingModalWindow.containerSettingModaText}>
                        <Text style = {StyleSettingModalWindow.TextStyle}>Do you really want to log out?</Text>
                    </View>
                    <View style = {StyleSettingModalWindow.containerOfButtons}>
                        <TouchableOpacity style = {StyleSettingModalWindow.AgreeButtonStyle} onPress={AgreeButtonfunc}>
                            <Text style = {StyleSettingModalWindow.TextStyle}>Agree</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {StyleSettingModalWindow.DisagreeButtonStyle} onPress={DisgreeButtonfunc}>
                            <Text style = {StyleSettingModalWindow.DisadgreeTextStyle}>Disagree</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>                                
        </Modal>
    )
}

export default SettingModalWindow;