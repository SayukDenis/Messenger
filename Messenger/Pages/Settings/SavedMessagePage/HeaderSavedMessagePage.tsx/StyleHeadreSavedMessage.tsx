import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleHeaderSavedMessage = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        width: "100%",
        height: Platform.OS=="android"?windowHeight * 0.08+StatusBar.currentHeight:windowHeight * 0.08+Constants.statusBarHeight,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderWidth:1,
        borderColor : '#A19C91'
    },
    headerContainer :{
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent: 'space-around'
    },

});

export default StyleHeaderSavedMessage;