import React from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import StyleEditCenter from './StyleEditCenter';
import EditPhotoButton from './ComponentsForEditCenter/EditPhotobutt';
import SVGStiker from '../../../settingsPage/Center/SVGComp/SVGSriker';
import ContainerForEditCenter from './ComponentsForEditCenter/ContainerForEditCenter';
import { screenHeight,screenWidth } from '../../../../../ChatList/Constants/ConstantsForChatlist';
import BackGroundColorForComponents from '../../../../../SemiComponents/BackGroundColorForComponents';
import ButtonForSettings from '../../../../../SemiComponents/ButtonForSettings';
import { ScrollView } from 'react-native-gesture-handler';

const heightOfEditContainer=screenHeight * 0.047;
  const widthOfEditContainer= screenWidth * 0.27;

const EditCenter: React.FC<any> = ({ navigation })=>{
    return (
        <ScrollView>
            <View style ={StyleEditCenter.conteiner}>
                <Image style={StyleEditCenter.avatar} source={{uri:'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1'}}></Image>
                <View style ={{display:"flex", flexDirection:"row", width:"100%", alignItems:'center',justifyContent:'center',}}>
                    <View style={{marginRight:"9%",flexDirection:'row', alignItems:'center'}}>
                        <SVGStiker/>
                        <TouchableOpacity style={{marginRight:'1.5%'}} onPress={() => navigation.navigate('Edit page')} >
                            <EditPhotoButton/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style ={StyleEditCenter.paragTextStyle}>Name</Text>
                <ContainerForEditCenter>
                    <TextInput style ={StyleEditCenter.inputText} placeholder='First name (required)'  placeholderTextColor={'black'}/>
                </ContainerForEditCenter>
                <ContainerForEditCenter>
                    <TextInput style ={StyleEditCenter.inputText} placeholder='Last name (optional)' placeholderTextColor={'black'}/>
                </ContainerForEditCenter>
                <Text style ={StyleEditCenter.paragTextStyle}>Bio</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditBioPage')}>
                    <ButtonForSettings text='Bio'/>
                </TouchableOpacity>
                <Text style ={StyleEditCenter.paragTextStyle}>Info</Text>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <ButtonForSettings text='@tag'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                <ButtonForSettings text='Edit number'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <ButtonForSettings text='Username'/>
                </TouchableOpacity>            
                <TouchableOpacity style={{alignItems:'center', flexDirection:'row'}} onPress={()=>navigation.goBack()} >
                    <View style={{alignSelf: "center",marginTop:"10%",height: heightOfEditContainer,width: widthOfEditContainer,borderRadius: 14.5,overflow: "hidden",justifyContent: "center", }}>
                        <Text style={{ alignSelf: "center",color: "#6A38AD",fontSize: 17}}>Done</Text>
                        <BackGroundColorForComponents height={heightOfEditContainer} width={widthOfEditContainer} ></BackGroundColorForComponents>
                    </View>
                </TouchableOpacity>
                <View style = {{height:screenHeight*0.03}}></View>
            </View>      
        </ScrollView>
    )
} 

export default EditCenter;