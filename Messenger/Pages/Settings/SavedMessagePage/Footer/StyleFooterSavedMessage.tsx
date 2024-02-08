import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const StyleFooterSavedMessage = StyleSheet.create({
    footerConteiner:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems:'center',
        flexDirection: 'row',
        width: "100%",
        height: windowHeight*0.1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth:1,
        borderColor:'#A19C91',
        overflow:"hidden",
    },

    svgConteinerForGallery:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:windowHeight*0.04,
        height:windowHeight*0.04,
        backgroundColor:'white',
        marginLeft:"5%"
    },

    svgConteinerForVideo:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:windowHeight*0.045,
        height:windowHeight*0.045,
        borderRadius:10000,
        backgroundColor:'white',
        marginLeft:"5%"
    },

    textInput:{
        marginLeft:"5%",
        paddingLeft:"5%",
        width:'100%',
        height:'50%',
        borderRadius:30,
        backgroundColor:'white',
        color :'#888282',

    }

});

export default StyleFooterSavedMessage;