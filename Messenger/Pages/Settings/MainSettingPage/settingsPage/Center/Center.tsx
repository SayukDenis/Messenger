import React, {useState} from 'react';
import { View, Image, Button, Text,TouchableOpacity, Modal, StyleSheet  } from 'react-native';
import StyleCentre from './StyleCenter';
import StyleButtonList from './ButtonLIst/StyleButtonLIst';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonList from './ButtonLIst/Buttonlist';

const Stack = createStackNavigator();

const Center: React.FC<any> = ({ navigation })=>{
         let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
        const [isModalVisible, setModalVisible] = useState(false);
        const toggleModal = () => {
            setModalVisible(!isModalVisible);
        };

        return <View style={StyleCentre.conteiner} >
                                
                                <Image style={StyleCentre.imgStyle} source={{uri:'https://www.meme-arsenal.com/memes/a297a80a2839282005e0a60135421919.jpg'}}></Image>
                                <View style={StyleCentre.button}><TouchableOpacity onPress={() => navigation.navigate('Edit page')} ><Text>Edit</Text></TouchableOpacity></View>
                                <View style={StyleCentre.box}></View>
                                <Text style= {StyleCentre.text}>Settings</Text>
                                <ButtonList navigation = {navigation}></ButtonList>
                                    <TouchableOpacity style ={StyleCentre.editButton} >
                                        <Text style={StyleCentre.editButtonText} onPress={toggleModal}>Exit</Text>
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

export default Center;