import React, {useState} from 'react';
import { View, Image, Button, Text,TouchableOpacity, Modal, StyleSheet  } from 'react-native';
import StyleCentre from './StyleCenter';
import StyleButtonList from './StyleButtonLIst';
import SavedmessagePage from '../../../SavedMessagePage/SavedMessagePage';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Header/Heder';

const Stack = createStackNavigator();

const Center: React.FC<any> = ({ navigation })=>{
         let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
        const [isModalVisible, setModalVisible] = useState(false);
        const toggleModal = () => {
            setModalVisible(!isModalVisible);
        };

        return <View style={StyleCentre.conteiner} >
                                
                                <Image style={StyleCentre.imgStyle} source={{uri:'https://www.meme-arsenal.com/memes/a297a80a2839282005e0a60135421919.jpg'}}></Image>
                                <View style={StyleCentre.button}><Button title ="Edit"  onPress={() => navigation.navigate('Edit page')} ></Button></View>
                                <View style={StyleCentre.box}></View>
                                <Text style= {StyleCentre.text}>Settings</Text>
                                <View>
                                    {items.map((item, index) => (
                                    <View key={index} >
                                        <TouchableOpacity style={StyleButtonList.button} onPress={() => navigation.navigate(item)}>
                                        <Text>{item}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    ))}
                                            <Text style= {StyleCentre.text}>Help</Text>
                                        <TouchableOpacity style={StyleButtonList.button} onPress={() => navigation.navigate('Question page')}>
                                                <Text>Question in Telintik</Text>
                                        </TouchableOpacity>
                                            <TouchableOpacity style={StyleButtonList.button} onPress={() => navigation.navigate('Ask')}>
                                                <Text>Ask a Question</Text>
                                            </TouchableOpacity>
                                 </View>
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