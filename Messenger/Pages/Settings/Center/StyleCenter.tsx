import React from 'react'
import { StyleSheet } from 'react-native'
import Center from './Center';

const StyleCentre = StyleSheet.create({
    
    conteiner:{
        display:'flex',
        alignItems:'center'
    },
    
    imgStyle :{
        marginTop:'5%',
        height:150,
        width:150,
        borderRadius:10000000
    },

    button:{
        marginTop:"2%",
        padding:0
    },

    box:{
        width : '90%',
        height:1,
        backgroundColor:'blue',
    },

    text:{
        marginTop:"2%",
        marginLeft:"5%",
        marginBottom:"2%",
        display:"flex",
        alignSelf:'flex-start'
    },

    editButton:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:"5%",
        height:"5%",
        width:"20%",
        borderWidth:1,
        borderColor:'black',
        borderRadius:15
    },

    editButtonText:{
        color:'red'
    }

});

export default StyleCentre;