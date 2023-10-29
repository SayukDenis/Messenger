import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const  StyleEditBioPageCenter = StyleSheet.create({
    textCenterConteiner:{
        marginLeft:'3%',
        marginTop:'3%',
        marginBottom:'3%'
    },
    textInput:{
        width:'90%',
        marginLeft:'3%',
        padding:'3%',
        borderWidth:1,
        borderRadius:10,
        height:windowHeight*0.07,
    }
});

export default StyleEditBioPageCenter;