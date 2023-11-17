import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const  StyleEditBioPageCenter = StyleSheet.create({
    textCenterConteiner:{
        marginLeft:'3%',
        marginTop:'3%',
        marginBottom:'3%'
    },

    textInputConteiner:{
        display:'flex',
        height:windowHeight*0.07,
        width:windowWidth*0.95,
        marginLeft:'2.5%',
        borderRadius:10,
        backgroundColor:"#DAB671",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },

    counterConteinter:{
        display:'flex',
        width:windowWidth*0.15,
        alignItems:'center',
    },
    
    textInput:{
        display:'flex',
        width:windowWidth*0.8,
        marginLeft:'3%',
        padding:'3%',
        height:windowHeight*0.05,
    }
});

export default StyleEditBioPageCenter;