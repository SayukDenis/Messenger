import React from "react";
import { StyleSheet, Dimensions  } from "react-native";

const windowHeight = Dimensions.get('window').height;

const StyleHeadr = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        width: "100%",
        height: windowHeight*0.06,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderwidth:5,
        borderColor : '#A19C91'
    },

    container :{
        display: "flex",
        flexDirection: 'row',
        width: '80%',
        alignItems:'center',
        justifyContent: 'space-around'
    },

    tag:{
        display:"flex",
        paddingBottom: 10,
        alignSelf:'flex-end',
    },

    userName:{
        display:'flex',
        fontSize: 20
    },

    phoneNumber:{
        display:"flex",
        paddingBottom: 10,
        alignSelf:'flex-end',
    }

});

export default StyleHeadr;