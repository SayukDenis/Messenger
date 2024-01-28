import React, {useState} from 'react';
import { View, Image,  Text,TouchableOpacity, Dimensions,ScrollView  } from 'react-native';
import StyleCentre from './StyleCenter';
import ButtonList from './ButtonLIst/Buttonlist';
import LogoutModalWindow from './LogoutModalWindow/LogoutModalWindow';
import SVGStiker from './SVGComp/SVGSriker';
import EditButton from '../../../../SemiComponents/EditButton';
import { heightOfHeader } from '../../../../ChatList/Constants/ConstantsForChatlist';



const Center: React.FC<any> = ({ navigation })=>{
 return (
        <ScrollView style={{ marginTop: heightOfHeader }}  >
                <View style={StyleCentre.conteiner}>                               
                        <Image style={StyleCentre.imgStyle} source={{uri:'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1'}}></Image>
                        <View style ={{display:"flex", flexDirection:"row", width:"100%", alignItems:'center',justifyContent:'center',}}>          
                                <View style={{marginRight:"9%",flexDirection:'row', alignItems:'center'}}>
                                        <SVGStiker></SVGStiker>
                                        <TouchableOpacity style={{marginRight:'1.5%'}} onPress={() => navigation.navigate('Edit page')} >
                                                <EditButton/>
                                        </TouchableOpacity>
                                </View>
                        </View>
                        <Text style= {StyleCentre.text}>Settings</Text>
                        <ButtonList navigation = {navigation}></ButtonList>
                        <LogoutModalWindow/>
                        <View style = {{marginTop:"5%"}}></View>
                </View>
        </ScrollView>
 )
   
}
export default Center;
