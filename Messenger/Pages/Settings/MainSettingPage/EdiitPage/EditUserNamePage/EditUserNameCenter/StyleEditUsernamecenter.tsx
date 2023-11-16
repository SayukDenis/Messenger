import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleEditUseNameCenter = StyleSheet.create({
    styleText:{
        marginLeft:'3%',
        marginTop:'3%',
    },

    textInputConteiner:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#DAB671',
        borderRadius:10,
        height:windowHeight*0.07,
        width:'95%',
        marginLeft:'3%',
        alignItems:'center'
    },

    textInput:{
        marginTop:'2%',
        marginLeft:'3%',
        width:'85%'
    }
});

export default StyleEditUseNameCenter;