import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleAddFolderHeader = StyleSheet.create({

    addFolderHeaderConteiner:{
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        height:windowHeight*0.07,
        paddingLeft:'2%',
        paddingRight:'2%',
    },
    backButt:{
        alignSelf:'flex-end',
        paddingBottom:'4%',
        width:"10%"
    },

    NewFolderArticleConteiner:{
        display:'flex',
        width:'80%',
        paddingBottom:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    DoneButton:{
        justifyContent:'center',
    },

});

export default StyleAddFolderHeader;