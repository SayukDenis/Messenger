import React from 'react';
import { StyleSheet,Dimensions  } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StyleButtonList = StyleSheet.create({

    buttonConteiner:{
        display:'flex',
        flexDirection:'row',
    },

    button:{
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        width:windowWidth*0.9,
        height:windowHeight*0.05,
        backgroundColor:'white',
        borderRadius:8,
        marginBottom:2,
        opacity:0.13
    },
    
    buttonTextStyle:{
        color:"#6A38AD",
        position:"absolute"
    },

    styleButListText:{
        marginTop:"2%",
        marginBottom:"2%",
        display:"flex",
        alignSelf:'flex-start'
    }
});

export default StyleButtonList;