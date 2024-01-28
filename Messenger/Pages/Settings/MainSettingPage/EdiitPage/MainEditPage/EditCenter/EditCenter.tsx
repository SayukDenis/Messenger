import React from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import StyleEditCenter from './StyleEditCenter';
import EditPhotoButton from './ComponentsForEditCenter/EditPhotobutt';
import SVGStiker from '../../../settingsPage/Center/SVGComp/SVGSriker';
import ContainerForEditCenter from './ComponentsForEditCenter/ContainerForEditCenter';
import { screenHeight,screenWidth } from '../../../../../ChatList/Constants/ConstantsForChatlist';
import BackGroundColorForComponents from '../../../../../SemiComponents/BackGroundColorForComponents';

const heightOfEditContainer=screenHeight * 0.047;
  const widthOfEditContainer= screenWidth * 0.27;

const EditCenter: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleEditCenter.conteiner}>
        <Image style={StyleEditCenter.avatar} source={{uri:'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1'}}></Image>
        <View style ={{display:"flex", flexDirection:"row", width:"100%", alignItems:'center',justifyContent:'center',}}>
            <View style={{marginRight:"9%",flexDirection:'row', alignItems:'center'}}>
                <SVGStiker></SVGStiker>
                <TouchableOpacity style={{marginRight:'1.5%'}} onPress={() => navigation.navigate('Edit page')} >
                <EditPhotoButton></EditPhotoButton>
                </TouchableOpacity>
            </View>
        </View>
        <Text style ={StyleEditCenter.paragTextStyle}>Name</Text>
        <ContainerForEditCenter ><TextInput style ={StyleEditCenter.inputText} placeholder='First name (required)'  placeholderTextColor={'black'}/></ContainerForEditCenter>
        <ContainerForEditCenter><TextInput style ={StyleEditCenter.inputText} placeholder='Last name (optional)' placeholderTextColor={'black'}/></ContainerForEditCenter>
        <Text style ={StyleEditCenter.paragTextStyle}>Bio</Text>
        <ContainerForEditCenter><TouchableOpacity style ={StyleEditCenter.buttonConteiner} onPress={() => navigation.navigate('EditBioPage')} ><Text>Your bio</Text></TouchableOpacity></ContainerForEditCenter>
        <Text style ={StyleEditCenter.paragTextStyle}>Edit info</Text>
        <ContainerForEditCenter><TouchableOpacity style ={StyleEditCenter.buttonConteiner} onPress={() => navigation.navigate('EditUsernamePage')} ><Text>@yourname</Text></TouchableOpacity></ContainerForEditCenter>
        <ContainerForEditCenter><TouchableOpacity style ={StyleEditCenter.buttonConteiner} ><Text>Edit your number</Text></TouchableOpacity></ContainerForEditCenter>
        <TouchableOpacity style={{alignItems:'center', flexDirection:'row'}} onPress={()=>navigation.goBack()} >
            <View style={{alignSelf: "center",marginTop:"10%",height: heightOfEditContainer,width: widthOfEditContainer,borderRadius: 14.5,overflow: "hidden",justifyContent: "center", }}>
                <Text style={{ alignSelf: "center",color: "#6A38AD",fontSize: 17}}>Done</Text>
                <BackGroundColorForComponents height={heightOfEditContainer} width={widthOfEditContainer} ></BackGroundColorForComponents>
            </View>
        </TouchableOpacity>  
    </View>
} 

export default EditCenter;