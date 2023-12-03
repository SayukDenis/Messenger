import React from 'react';
import { StyleSheet,Dimensions  } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StyleButtonList = StyleSheet.create({
    button:{
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        width:windowWidth*0.9,
        height:windowHeight*0.05,
        backgroundColor:'#DAB671',
        borderWidth:1,
        borderColor:'black',
        borderRadius:10
    },
    
    styleButListText:{
        marginBottom:"2%",
        marginTop:'2%'
    }
});

export default StyleButtonList;