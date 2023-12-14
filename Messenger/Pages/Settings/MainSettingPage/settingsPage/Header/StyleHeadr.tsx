import React from "react";
import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;

const StyleHeadr = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        width: "100%",
        height: Platform.OS=="android"?windowHeight * 0.08+StatusBar.currentHeight:windowHeight * 0.08+Constants.statusBarHeight,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderWidth:1,
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