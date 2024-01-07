import React, {useState} from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import StyleCentre from "./StyleCenter";
import BlurAll from "../../../../SemiComponents/BlurAll";


const ModalWindow = ()=>{

    const [isModalVisible, setModalVisible] = useState(false);
        const toggleModal = () => {
            setModalVisible(!isModalVisible);
        };

    return <View style = {{height:'auto'}} >
        <TouchableOpacity style={{alignItems:'center', flexDirection:'row'}} onPress={toggleModal} >
                                        <View style ={StyleCentre.exitButton}></View>
                                        <View style={{ position: 'absolute',  width:"100%",height:'100%', alignItems:'center', justifyContent:'center'}}>
                                            <Text style={{ color: 'red', paddingTop:"3%", textAlign: 'center' }}>Exit</Text>
                                        </View>
                                    </TouchableOpacity>           
                                <Modal 
                                            animationType="none"
                                            transparent={true}
                                            visible={isModalVisible}
                                            onRequestClose={toggleModal}>
                                            <View style={StyleCentre.conteinreModalwindow} >
                                                <View style={StyleCentre.modalWindow} >  
                                                    <View style={StyleCentre.modalTextConteiner} ><Text>Do you really want to log out?</Text></View>             
                                                    <View style={StyleCentre.modalButtonsConteiner}>
                                                            <TouchableOpacity style={StyleCentre.modalButtonAgree}  onPress={toggleModal} ><Text style={StyleCentre.agreeButtonText}>Agree</Text></TouchableOpacity>
                                                            <TouchableOpacity style={StyleCentre.modalButtonDisagree}  onPress={toggleModal} ><Text style={StyleCentre.disagreeButtonText}>Disagree</Text></TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                </Modal>
        
    </View>
}

export default ModalWindow;