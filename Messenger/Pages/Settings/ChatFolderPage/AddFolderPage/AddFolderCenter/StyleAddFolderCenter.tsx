import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;525

const StyleAddFolderCenter = StyleSheet.create({
    styleAddFolderText:{
        marginTop:'2%',
        marginLeft:'3%'
    },
    styleAddFolderInputText:{
        height:windowHeight*0.07,
        justifyContent:'center',
        width:"94%",
        padding:'3%',
        marginLeft:'3%',
        backgroundColor:'#DAB671',
        borderRadius:10
    }
});

export default StyleAddFolderCenter;