import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleAddFolderCenter = StyleSheet.create({
    styleAddFolderText:{
        marginTop:'4%',
        marginLeft:'3%',
        fontSize:17,
        marginBottom:'4%',
    },
});

export default StyleAddFolderCenter;