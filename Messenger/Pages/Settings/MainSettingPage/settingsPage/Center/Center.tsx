import React, {useState} from 'react';
import { View, Image,  Text,TouchableOpacity, Dimensions  } from 'react-native';
import StyleCentre from './StyleCenter';
import ButtonList from './ButtonLIst/Buttonlist';
import ModalWindow from './Modal';
import StikerSVG from './Styker';

const windowHeight = Dimensions.get('window').height;
const windowHWidth = Dimensions.get('window').width;

const Center: React.FC<any> = ({ navigation })=>{
        return <View style={StyleCentre.conteiner} >
                                
                                <Image style={StyleCentre.imgStyle} source={{uri:'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1'}}></Image>
                                <View style ={{display:"flex", flexDirection:"row", width:"100%", alignItems:'center',justifyContent:'center',}}>
                                    <View style ={{display:'flex', flexDirection:'row', marginRight:'3%',marginTop:"3%",}}>
                                        <View style={{backgroundColor:'white',width:windowHeight*0.05, height:windowHeight*0.05, opacity:0.13, borderRadius:15, }}></View>
                                        <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center' ,width: '100%', height: '100%' }}><StikerSVG  width={windowHWidth*0.09} height={windowHeight*0.032} color="black"></StikerSVG></View>
                                    </View>
                                    <View style={{marginRight:"3%"}}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Edit page')} >
                                         <View style={StyleCentre.editButton}></View>
                                         <View style = {{position:'absolute', marginTop:'4%',width:"75%",height:"84%" ,alignItems:'center',justifyContent:'center'}}><Text style={StyleCentre.editButtonText}>Edit</Text></View>
                                        </TouchableOpacity></View>
                                </View>
                                <Text style= {StyleCentre.text}>Settings</Text>
                                <ButtonList navigation = {navigation}></ButtonList>
                                <ModalWindow></ModalWindow>
                        </View>
   
}

export default Center;
