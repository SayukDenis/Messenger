import { StyleSheet } from "react-native";

const StyleSettingModalWindow = StyleSheet.create({
   
    SettingModalWindowContainer :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    SettingModalWindowWindow:{
        height:"20%",
        width:"85%",
        backgroundColor:'white',
        borderRadius:35,
        borderWidth:0.4,
        overflow:"hidden"
    },

    containerSettingModaText:{
        justifyContent:'center',
        alignItems:'center',
        height:"70%",
        borderBottomWidth:0.4,
        borderColor:"black"
    },
    containerOfButtons:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        width:"100%",
        height:"30%",
        overflow:"hidden"
    },
    AgreeButtonStyle:{
        width:"50%",
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        borderRightWidth:0.4,
        backgroundColor:'#EAEAEA',
        borderColor:"black"
    },
    DisagreeButtonStyle:{
        width:"50%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#EAEAEA',
        height:'100%',
    },

    TextStyle :{
        color:"#2B1D1D"
    },

    DisadgreeTextStyle :{
        color:"#CE2500"
    }
})

export default StyleSettingModalWindow;