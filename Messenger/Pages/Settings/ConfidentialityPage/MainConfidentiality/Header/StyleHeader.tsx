import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;525

const StyleHeadr = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        height: Platform.OS=="android"?windowHeight * 0.08+StatusBar.currentHeight:windowHeight * 0.08+Constants.statusBarHeight,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderColor : '#A19C91',
        borderWidth:1
    },

    backButContainer :{
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        width:"20%"
    },

    backbutton:{
        backgroundColor:'blue',
    },

    conteinerConfidentialityPage:{
        display:"flex",
        width:"56%",
        alignItems:"center",
        justifyContent:"center"
    }

});

export default StyleHeadr;