import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const StyleFooterSavedMessage = StyleSheet.create({
    footerConteiner:{
        display: "flex",
        alignItems:'center',
        flexDirection: 'row',
        width: "100%",
        height: windowHeight*0.06,
        borderBottomLeftRadius:windowHeight*0.03,
        borderBottomRightRadius:windowHeight*0.03,
        backgroundColor: '#E7E6E4',
        borderWidth:1,
        borderColor:'#A19C91'
    },

    svgConteiner:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'10%'
    },

    textInput:{
        width:'80%',
        height:'60%',
        borderRadius:30,
        backgroundColor:'#272727',
        color :'#888282',
        paddingLeft: '5%'
    }

});

export default StyleFooterSavedMessage;