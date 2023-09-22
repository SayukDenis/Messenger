import React from 'react';
import { StyleSheet, View, Text ,Dimensions} from 'react-native';

const { width: screenWidth ,height:screenHeight} = Dimensions.get('window');
export const headerstyles = StyleSheet.create({
  container: {
    height:screenHeight*0.08,
    backgroundColor:'#E7E6E4',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    borderWidth:1.8,
    borderColor:'#434343',
    flexDirection:"row",
    
  },
  magnifyingglass:{
      height:screenHeight*0.08*0.4,
      aspectRatio:1,
      color:"#434343",
      display:"flex",
      alignSelf:"center",
      marginLeft:screenWidth*0.05
  },
  containerforavatar: {
    height:screenHeight*0.08*0.7,
    aspectRatio:1,
    alignSelf: 'center', 
    justifyContent:'center',
    //backgroundColor:"blue",
    left:screenWidth*0.1,
    
    },
  avatar: {
    height:screenHeight*0.08*0.7,
   aspectRatio: 1,
   position:"relative",
    borderRadius:1000,
    //borderWidth:1,
   // borderColor:"#434343"
  },
  modeactivity:{
    height:screenHeight*0.01,
    aspectRatio:1,
    position:"relative",
    top:screenHeight*0.019,
    left:screenWidth*0.09,
  },
  ViewOfModeOfEmployment:{
    alignContent:"center",
    alignSelf: 'center',
    flexDirection:'row',
    left:screenWidth*0.14,
   // backgroundColor:"white"
  },
  textOfModeOfEmployment:{
    color:"#434343",
    fontSize:screenHeight*0.018
  },
  arrowModeOfEmployment:{
    color:"#434343",
    width:screenWidth*0.035,
    aspectRatio:1,
    position:"relative",
    top:screenHeight*0.0034,
    left:screenWidth*0.007
  },
  hamburgerview:{
    height:screenHeight*0.08,
    //backgroundColor:'blue',
    justifyContent:"center",
    alignSelf:"center",
    marginRight:screenWidth*0.04,
    position: 'absolute', 
    right:0

  },
  lineForHamburger:{
    
  }
  });
  