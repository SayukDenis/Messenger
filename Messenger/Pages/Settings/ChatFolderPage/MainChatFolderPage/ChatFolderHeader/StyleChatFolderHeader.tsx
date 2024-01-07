import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;525

const StyleChatfolderHeader = StyleSheet.create({

    chatFolderHeaderconteiner:{
        display:'flex',
        width:'100%',
        height:"60%",
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'2%',
    },

    backButt:{
        width:"10%",
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    DoneButton:{
        width:"10%"
    },

    articleOfPage:{
        alignItems:'center',
        width:'74%',
    },

    arcticleStyleText:{
        fontSize:20,
    }

});
export default StyleChatfolderHeader;