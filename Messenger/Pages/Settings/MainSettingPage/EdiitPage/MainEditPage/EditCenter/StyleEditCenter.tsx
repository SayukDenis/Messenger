import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StyleEditCenter = StyleSheet.create({
    
    conteiner:{
        display:"flex",
        alignItems:'center',
        width:'100%'
    },
    
    avatar:{
        height:windowWidth*0.35,
        width:windowWidth*0.35,
        borderRadius:100000000,
        marginTop:'3%'
    },

    editPhotoButt:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        marginTop:'5%',
        width:'25%',
        height:'4%',
        backgroundColor:'#DAB671',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
    },

    box:{
        width : '90%',
        height:1,
        backgroundColor:'black',
    },

    paragTextStyle:{
        alignSelf:'flex-start',
        marginLeft:'5%',
        marginTop:'10%',
        marginBottom:'3%',
    },

    inputText:{
        width:'90%',
        height:windowHeight*0.07,
        backgroundColor:'#DAB671',
        borderRadius:10,
        borderWidth:1,
        padding:'3%'
    },

    buttonConteiner:{
        display:'flex',
        width:'90%',
        padding:'3%',
        justifyContent:'center',
        height:windowHeight*0.07,
        backgroundColor:'#DAB671',
        borderRadius:10,
        borderWidth:1,
    }



});

export default StyleEditCenter;