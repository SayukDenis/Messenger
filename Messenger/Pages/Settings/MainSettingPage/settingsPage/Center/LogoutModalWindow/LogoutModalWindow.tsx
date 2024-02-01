import React, {useState} from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import StyleCentre from "../StyleCenter";
import BlurAll from "../../../../../SemiComponents/BlurAll";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import BackGroundColorForComponents from "../../../../../SemiComponents/BackGroundColorForComponents";


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
        </Modal>
                                   
    </View>
    )
}

export default LogoutModalWindow;