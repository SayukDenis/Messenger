import React, {useState} from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import StyleCentre from "../StyleCenter";
import BlurAll from "../../../../../SemiComponents/BlurAll";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import BackGroundColorForComponents from "../../../../../SemiComponents/BackGroundColorForComponents";
import StyleLogOutModalWindow from "./LogoutModalWindowStyle.";

const LogoutModalWindow = ()=>{

    const [isModalVisible, setModalVisible] = useState(false);
        const toggleModal = () => {
            setModalVisible(!isModalVisible);
        };
        const heightOfEditContainer=screenHeight * 0.043;
  const widthOfEditContainer= screenWidth * 0.25;

    return(
    <View style = {{height:'auto'}} >
        <TouchableOpacity style={{alignItems:'center', flexDirection:'row'}} onPress={toggleModal} >
            <View style={{alignSelf: "center",marginTop: 20,height: heightOfEditContainer,width: widthOfEditContainer,borderRadius: 14.5,overflow: "hidden",justifyContent: "center"}}>
                <Text style={{ alignSelf: "center",color: "red",fontSize: 17}}> Exit</Text>
                <BackGroundColorForComponents height={heightOfEditContainer} width={widthOfEditContainer} ></BackGroundColorForComponents>
            </View>
        </TouchableOpacity>           
        <Modal 
             animationType="none"
             transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}> 
            <View style = {StyleLogOutModalWindow.LogoutModalContainer}>
                <View style = {StyleLogOutModalWindow.LogoutModalWindow}>
                    <View style = {StyleLogOutModalWindow.containerLogoutText}>
                        <Text style = {StyleLogOutModalWindow.TextStyle}>Do you really want to log out?</Text>
                    </View>
                    <View style = {StyleLogOutModalWindow.containerOfButtons}>
                        <TouchableOpacity style = {StyleLogOutModalWindow.AgreeButtonStyle} onPress={toggleModal}>
                            <Text style = {StyleLogOutModalWindow.TextStyle}>Agree</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {StyleLogOutModalWindow.DisagreeButtonStyle} onPress={toggleModal}>
                            <Text style = {StyleLogOutModalWindow.DisadgreeTextStyle}>Disagree</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>                                
        </Modal>
                                   
    </View>
    )
}

export default LogoutModalWindow;