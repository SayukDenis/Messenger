import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleEditBioPageHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        width: "100%",
        height: Platform.OS=="android"?windowHeight * 0.08+StatusBar.currentHeight:windowHeight * 0.08+Constants.statusBarHeight,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderWidth:1,
        borderColor : '#A19C91'
    },
    backButt:{
        marginLeft:"5%"
    },

    conteinterUserName:{
        width:'70%',
        alignItems:'center'
    },

    UserName:{
        marginLeft:'5%'
    }

});

export default StyleEditBioPageHeader;